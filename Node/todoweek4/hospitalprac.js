const express = require("express");
const app = express();
app.use(express.json());
const users = [
  {
    name: "john",
    age: 30,
    kidneys: [
      //{health: true},
      {health: false },
      {health: false },
      {health: false },
      {health: false }, 
      // {health: true }
    ],
  },
];

app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;

  let numberOfHealthyKidneys = johnKidneys.filter(function (kidney) {
    return kidney.health === true;
  });

  const numberOfKidneys = johnKidneys.length;

  res.json({
    total: johnKidneys.length,
    healthy: numberOfHealthyKidneys.length,
    unhealthy: numberOfKidneys - numberOfHealthyKidneys.length,
  });
});

app.post('/', function(req, res) {
  const isHealthy = req.body.isHealthy;

  // 1. Check if isHealthy is present
  if (typeof isHealthy === "undefined") {
    return res.status(400).json({ error: "isHealthy is required" });
  }

  // 2. Check if isHealthy is boolean
  if (typeof isHealthy !== "boolean") {
    return res.status(400).json({ error: "isHealthy must be a boolean (true/false)" });
  }

  // 3. Safe check on users array and kidneys
  if (!users || !Array.isArray(users) || !users[0] || !Array.isArray(users[0].kidneys)) {
    return res.status(500).json({ error: "Server setup error: users or kidneys not initialized" });
  }

  // 4. Add the new kidney info
  users[0].kidneys.push({ health: isHealthy });

  res.json({ msg: "Done" });
});

app.put('/',function(req,res){
 for (let i = 0; i <users[0].kidneys.length; i++) {
        users[0].kidneys[i].health=true;
 }
 res.json({})

})
app.delete('/',function(req,res){
  let ans = users[0].kidneys.filter(function (kidney) {
    return kidney.health === true;
  });
  res.json({ans})
})
const port = process.env.PORT || 3000;
app.listen(port);
