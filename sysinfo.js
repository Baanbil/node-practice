// monitor.js
const os = require("os");

console.log("==== System Info ====");
console.log(`Platform: ${os.platform()} ${os.release()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`Hostname: ${os.hostname()}`);
console.log(`CPU Cores: ${os.cpus().length}`);
console.log(`Free Memory: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB`);
console.log(`Total Memory: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`);
console.log(`System Uptime: ${(os.uptime() / 3600).toFixed(2)} hours`);
