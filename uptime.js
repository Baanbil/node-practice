const os = require("os")

const uptime = os.uptime();

let hours = Math.floor(uptime / 3600)
let minutes = Math.floor((uptime % 3600) / 60)
let seconds = Math.floor(uptime % 60)
console.log(`System Uptime: ${hours}h ${minutes}m ${seconds}s`)
