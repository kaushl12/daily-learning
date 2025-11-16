// const axios = require("axios");
// async function main() {
//   const response = await fetch(
//     " https://httpdump.app/dumps/735dff12-d295-4b5f-9bf8-8e56885523c4",
//     {
//       method: "POST",
//       body: {
//         Data: 36983462396,
//       },
//       headers: {
//         Authorization: "hello",
//       },
//     }
//   );
//   const json = await response.text();
//   console.log(json);
// }
// async function main2() {
//   const response = await axios.get(
//     "https://httpdump.app/dumps/735dff12-d295-4b5f-9bf8-8e56885523c4?a=10",
//     {
//       data: "Kaushalisssss!!",
//       pass:"here im "
//     },
//     {
//       headers: {
//         Authorization: "hello",
//       },
//     }
//   );

//   console.log(response.data);
// }
// main2();

const users = ["Techie", "GPT"];

const userObjects = users.map(data => ({ data }));
console.log(userObjects);
