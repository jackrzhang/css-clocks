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

    // See domino.js
    updateDomino('hours', 'tens', timeDigits[0]);
    updateDomino('hours', 'ones', timeDigits[1]);
    updateDomino('minutes', 'tens', timeDigits[2]);
    updateDomino('minutes', 'ones', timeDigits[3]);
    updateDomino('seconds', 'tens', timeDigits[4]);
    updateDomino('seconds', 'ones', timeDigits[5]);
}

function formatTime() {
    var time = getCurrentTime();
    var timeDigits = new Array();

    // Add padding and convert to type string
    for ( var i = 0; i < time.length; i++ ) {
        time[i] = time[i] > 9 ? "" + time[i]: "0" + time[i];

        // Append individual digits to timeDigits 
        for ( var j = 0; j < time[i].length; j++ ) {
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