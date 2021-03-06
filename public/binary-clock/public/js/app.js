
$(document).ready(function() {
    updateDisplay();
    tickTock();
    clockInfo();
});

function tickTock() {
    // Call every second
    setInterval( function() {
        // console.log(formatTime());
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

    if ( newValue/8 >= 1 ) {
        updateSquare(squareIdPrefix + '8', true);
        newValue = newValue % 8;
    } else {
        updateSquare(squareIdPrefix + '8', false);
    }

    if ( newValue/4 >= 1 ) {
        updateSquare(squareIdPrefix + '4', true);
        newValue = newValue % 4;
    } else {
        updateSquare(squareIdPrefix + '4', false);
    }

    if ( newValue/2 >= 1 ) {
        updateSquare(squareIdPrefix + '2', true);
        newValue = newValue % 2;
    } else {
        updateSquare(squareIdPrefix + '2', false);
    }

    if ( newValue/1 == 1 ) {
        updateSquare(squareIdPrefix + '1', true);
    } else {
        updateSquare(squareIdPrefix + '1', false);
    }
}

function updateSquare(squareId, turnOn) {
    if ( $('#' + squareId).hasClass('digit-none') == false ) {
        if ( turnOn ) {
            $('#' + squareId).removeClass('digit-0');
            $('#' + squareId).addClass('digit-1');
        } else {
            $('#' + squareId).removeClass('digit-1');
            $('#' + squareId).addClass('digit-0');
        }
    }
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