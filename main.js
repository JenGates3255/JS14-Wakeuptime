$(document).on('ready', function() {

var outerShell = $('<div class="outershell"></div>');
	var innerShell = $('<div class="innershell"></div>');
		var amPmAutoLabels = $('<div class="am-pm-auto-labels"> <p>PM</p><p id="auto">AUTO</p></div>');
		var clockScreen = $('<div class="clockscreen">');
			var amPmIndicator = $('<div class="am-pm-indicator"></div>');
			var clockText = $('<div class="clock-text"> 12:00 </div>');
		var bottonStation1 = $('<div class="bottom-station">AM 53 60 70 90 100 105 112 120</div>');
		var bottomStation2 = $('<div class="bottom-station">FM 68 92 96 102 106 108 115 123</div>');

clockScreen.append(amPmIndicator,clockText);

innerShell.append(amPmAutoLabels, clockScreen, bottonStation1, bottomStation2);

outerShell.append(innerShell);

$('body').append(outerShell);
});