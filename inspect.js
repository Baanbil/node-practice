// inspect.js
const path = require("path");

const filePath = "/home/user/projects/node-practice/app.js";

console.log("Full path:", filePath);
console.log("Base name:", path.basename(filePath));
console.log("Directory:", path.dirname(filePath));
console.log("Extension:", path.extname(filePath));
console.log("Parsed:", path.parse(filePath));
