
$(document).ready(function() {
    tickTock();
});

function tickTock() {
    // Call every second
    setInterval( function() {
        console.log(formatTime());
        updateDisplay();
    }, 1000)
}

function updateDisplay() {
    var timeDigits = formatTime();

    updateColumn('hours', 'tens', timeDigits[0]);
    updateColumn('hours', 'ones', timeDigits[1]);
    updateColumn('minutes', 'tens', timeDigits[2]);
    updateColumn('minutes', 'ones', timeDigits[3]);
    updateColumn('seconds', 'tens', timeDigits[4]);
    updateColumn('seconds', 'ones', timeDigits[5]);
}

function updateColumn(unit, column, newValue) {
    var squareIdPrefix = unit + '-' + column + '-';
    
}

function formatTime() {
    var time = getCurrentTime();
    var timeDigits = new Array();

    // Add padding and convert to type string
    for (var i = 0; i < time.length; i++) {
        time[i] = time[i] > 9 ? "" + time[i]: "0" + time[i];

        // Append individual digits to timeDigits 
        for (var j = 0; j < time[i].length; j++) {
            var timeDigit = Number(time[i][j]);
            timeDigits.push(timeDigit);
        }
    }

    return timeDigits;
}

function getCurrentTime() {
    var date = new Date();

    return [
        date.getHours(), 
        date.getMinutes(), 
        date.getSeconds()
    ];
}