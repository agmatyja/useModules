var os = require('os');

function formattedUptime() {
	var time = os.uptime();
	var hours = Math.floor(time / 3600);
	var minutes = Math.floor((time - hours * 3600) / 60);
	var seconds = Math.floor(time - (hours * 3600) - (minutes * 60)); 
	
	return hours + 'h ' + minutes + 'min ' + seconds + 'sec.';
}	

exports.formattedUptime = formattedUptime;