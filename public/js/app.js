$(document).ready(function() {
    var previousTimeDigits;
    var timeDigits = formatTime();

    tickTock();
    clockInfo();
});

function tickTock() {
    // Instantiate display
    updateCard('hours', 'tens', timeDigits[0]);
    updateCard('hours', 'ones', timeDigits[1]);
    updateCard('minutes', 'tens', timeDigits[2]);
    updateCard('minutes', 'ones', timeDigits[3]);
    updateCard('seconds', 'tens', timeDigits[4]);
    updateCard('seconds', 'ones', timeDigits[5]);

    // Update display every second
    setInterval( function() {
        updateDisplay();
    }, 1000)
}

function updateDisplay() {
    previousTimeDigits = timeDigits;
    timeDigits = formatTime();

    // Only update dominos for changed time digits
    if ( previousTimeDigits[0] != timeDigits[0] ) 
        updateCard('hours', 'tens', timeDigits[0]);
    if ( previousTimeDigits[1] != timeDigits[1] ) 
        updateCard('hours', 'ones', timeDigits[1]);
    if ( previousTimeDigits[2] != timeDigits[2] ) 
        updateCard('minutes', 'tens', timeDigits[2]);
    if ( previousTimeDigits[3] != timeDigits[3] ) 
        updateCard('minutes', 'ones', timeDigits[3]);
    if ( previousTimeDigits[4] != timeDigits[4] ) 
        updateCard('seconds', 'tens', timeDigits[4]);
    if ( previousTimeDigits[5] != timeDigits[5] ) 
        updateCard('seconds', 'ones', timeDigits[5]);
}

function clockInfo() {
    // Update clock info display
    setInterval( function() {
        var time = getCurrentTime();

        for ( var i = 0; i < time.length; i++ ) {
            time[i] = time[i] > 9 ? "" + time[i]: "0" + time[i];
        }

        $('#info-time-hours').html(time[0]);
        $('#info-time-minutes').html(time[1]);
        $('#info-time-seconds').html(time[2]);
    }, 1000)

    // Binary clock to clock information animation
    $('.clock-display').on('click', function() {
        $('.clock-info-time').animate({ opacity: 1 }, 1000);
        $('.clock-display').animate({ opacity: 0 }, 1000);
        $('.clock-display').css('z-index', '0');
        $('.clock-info-time').css('z-index', '10');
    })

    // Clock information to binary clock animation
    $('.clock-info-time').on('click', function() {
        $('.clock-display').animate({ opacity: 1 }, 1000);
        $('.clock-info-time').animate({ opacity: 0 }, 1000);
        $('.clock-info-time').css('z-index', '0');
        $('.clock-display').css('z-index', '10');
    })
}

function formatTime() {
    var time = getCurrentTime();
    timeDigits = new Array();

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