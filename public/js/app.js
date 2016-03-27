
$(document).ready(function() {
    tickTock();
});

function tickTock() {
    // Call every second
    setInterval( function() {
        // console.log(formatTime());
        updateDisplay();
    }, 1000)
}

function updateDisplay() {

}

function timeToDegrees() {

}

function getCurrentTime() {
    var date = new Date();

    return [
        date.getHours(), 
        date.getMinutes(), 
        date.getSeconds()
    ];
}