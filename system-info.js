const os = require("os")

console.log("system architecture: ", os.arch())
console.log("cpu info: ", os.cpus())
console.log("platform: ", os.platform())
console.log("Home directory: ", os.homedir())
console.log("total memory: ", os.totalmem())
console.log("free memory: ", os.freemem())
