const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();

app.get("/files", function (req, res) {
  const location = path.join(__dirname, "allfiles");
  fs.readdir(location, (err, data) => {
    if (err) {
      console.log("Error in reading directory ", err.message);
      return res.status(500).json({ error: " Failed to read files directory" });
    }

    res.status(200).json(data);
  });
});

app.get("/files/:fileName", function (req, res) {
  const filename = req.params.fileName;
  const filelocation = path.join(__dirname, "allfiles", filename);
  if (filename.includes("..") || path.isAbsolute(filename)) {
    return res.status(400).json({ error: "Invalid file name" });
  }
  fs.readFile(filelocation, "utf-8", function (err, data) {
    if (err) {
      if (err.code === "ENOENT") {
        return res.status(404).json({ error: "File not found" }); // <-- Add this
      }
      console.log(`Error in reading File  ${filename}`, err.message);
      return res.status(500).json({ error: " Failed to read files " });
    }
    res.json({
      filename: filename,
      content: data,
    });
  });
});
app.get("/", (req, res) => {
  res.send(
    "Use /files to list files and /files/:fileName to read a specific file."
  );
});
// 404 route (must be the last route)
app.use((req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});


app.listen(3000);
