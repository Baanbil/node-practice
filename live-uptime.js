const os = require("os")

function formatUptime(seconds){
	const hours = Math.floor(seconds / 3600)
	const minutes = Math.floor((seconds % 3600) / 60)
	const sec = Math.floor(seconds % 60)
	return `${hours}h ${minutes}m ${sec}s`
}
setInterval(() => {
	console.clear()
	const uptime = os.uptime()
	console.log("=====SYSTEM UPTIME=====")
	console.log(formatUptime(uptime))
}, 1000)
