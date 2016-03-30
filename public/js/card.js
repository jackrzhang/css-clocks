function updateCard(unit, column, value) {
    var cardId = unit + '-' + column;

    // Determine card suit randomly
    var suitRandom = Math.random();
    if ( suitRandom < 0.25 ) {
        // spades
        var suit = '&#9824';
    } else if ( suitRandom < 0.5 ) {
        // hearts
        var suit = '&#9829';
    } else if ( suitRandom < 0.75 ) {
        // clubs
        var suit = '&#9827';
    } else {
        // diamonds
        var suit = '&#9830';
    }

    // Update suit
    $('#' + cardId).children('.suit-label').html(suit);
    $('#' + cardId).children('.suit-symbol').html(suit);

    // Update card color according to suit
    if ( suit == '&#9829' || suit == '&#9830' ) {
        // red for hearts and diamonds
        $('#' + cardId).removeClass('black');
        $('#' + cardId).addClass('red');
    } else {
        // black for spades and clubs
        $('#' + cardId).removeClass('red');
        $('#' + cardId).addClass('black');
    }

    // Update card value (Ace for 1)
    if (value == 1) {
        $('#' + cardId).children('.card-value').html('A');
    } else {
        $('#' + cardId).children('.card-value').html(value);
    }

    // Show or hide appropriate suit symbols on card
    updateSuitSymbols(cardId, value);
}

function updateSuitSymbols(cardId, value) {
    switch(value) {
        case 0:
            $('#' + cardId).children('.suit-symbol-1-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-1-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-1-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-2-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-3-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-3-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-4-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-4-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-4-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-5-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-5-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-6-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-7-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-7-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-7-3').removeClass('show');
            break;
        case 1:
            $('#' + cardId).children('.suit-symbol-1-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-1-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-1-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-2-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-3-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-3-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-4-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-4-2').addClass('show');
            $('#' + cardId).children('.suit-symbol-4-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-5-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-5-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-6-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-7-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-7-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-7-3').removeClass('show');
            break;
        case 2:
            $('#' + cardId).children('.suit-symbol-1-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-1-2').addClass('show');
            $('#' + cardId).children('.suit-symbol-1-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-2-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-3-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-3-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-4-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-4-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-4-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-5-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-5-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-6-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-7-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-7-2').addClass('show');
            $('#' + cardId).children('.suit-symbol-7-3').removeClass('show');
            break;
        case 3:
            $('#' + cardId).children('.suit-symbol-1-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-1-2').addClass('show');
            $('#' + cardId).children('.suit-symbol-1-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-2-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-3-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-3-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-4-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-4-2').addClass('show');
            $('#' + cardId).children('.suit-symbol-4-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-5-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-5-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-6-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-7-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-7-2').addClass('show');
            $('#' + cardId).children('.suit-symbol-7-3').removeClass('show');
            break;
        case 4:
            $('#' + cardId).children('.suit-symbol-1-1').addClass('show');
            $('#' + cardId).children('.suit-symbol-1-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-1-3').addClass('show');
            $('#' + cardId).children('.suit-symbol-2-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-3-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-3-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-4-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-4-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-4-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-5-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-5-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-6-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-7-1').addClass('show');
            $('#' + cardId).children('.suit-symbol-7-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-7-3').addClass('show');
            break;
        case 5:
            $('#' + cardId).children('.suit-symbol-1-1').addClass('show');
            $('#' + cardId).children('.suit-symbol-1-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-1-3').addClass('show');
            $('#' + cardId).children('.suit-symbol-2-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-3-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-3-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-4-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-4-2').addClass('show');
            $('#' + cardId).children('.suit-symbol-4-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-5-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-5-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-6-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-7-1').addClass('show');
            $('#' + cardId).children('.suit-symbol-7-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-7-3').addClass('show');
            break;
        case 6:
            $('#' + cardId).children('.suit-symbol-1-1').addClass('show');
            $('#' + cardId).children('.suit-symbol-1-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-1-3').addClass('show');
            $('#' + cardId).children('.suit-symbol-2-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-3-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-3-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-4-1').addClass('show');
            $('#' + cardId).children('.suit-symbol-4-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-4-3').addClass('show');
            $('#' + cardId).children('.suit-symbol-5-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-5-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-6-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-7-1').addClass('show');
            $('#' + cardId).children('.suit-symbol-7-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-7-3').addClass('show');
            break;
        case 7:
            $('#' + cardId).children('.suit-symbol-1-1').addClass('show');
            $('#' + cardId).children('.suit-symbol-1-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-1-3').addClass('show');
            $('#' + cardId).children('.suit-symbol-2-2').addClass('show');
            $('#' + cardId).children('.suit-symbol-3-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-3-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-4-1').addClass('show');
            $('#' + cardId).children('.suit-symbol-4-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-4-3').addClass('show');
            $('#' + cardId).children('.suit-symbol-5-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-5-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-6-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-7-1').addClass('show');
            $('#' + cardId).children('.suit-symbol-7-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-7-3').addClass('show');
            break;
        case 8:
            $('#' + cardId).children('.suit-symbol-1-1').addClass('show');
            $('#' + cardId).children('.suit-symbol-1-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-1-3').addClass('show');
            $('#' + cardId).children('.suit-symbol-2-2').addClass('show');
            $('#' + cardId).children('.suit-symbol-3-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-3-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-4-1').addClass('show');
            $('#' + cardId).children('.suit-symbol-4-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-4-3').addClass('show');
            $('#' + cardId).children('.suit-symbol-5-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-5-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-6-2').addClass('show');
            $('#' + cardId).children('.suit-symbol-7-1').addClass('show');
            $('#' + cardId).children('.suit-symbol-7-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-7-3').addClass('show');
            break;
        case 9:
            $('#' + cardId).children('.suit-symbol-1-1').addClass('show');
            $('#' + cardId).children('.suit-symbol-1-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-1-3').addClass('show');
            $('#' + cardId).children('.suit-symbol-2-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-3-1').addClass('show');
            $('#' + cardId).children('.suit-symbol-3-3').addClass('show');
            $('#' + cardId).children('.suit-symbol-4-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-4-2').addClass('show');
            $('#' + cardId).children('.suit-symbol-4-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-5-1').addClass('show');
            $('#' + cardId).children('.suit-symbol-5-3').addClass('show');
            $('#' + cardId).children('.suit-symbol-6-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-7-1').addClass('show');
            $('#' + cardId).children('.suit-symbol-7-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-7-3').addClass('show');
            break;
        default:
            $('#' + cardId).children('.suit-symbol-1-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-1-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-1-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-2-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-3-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-3-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-4-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-4-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-4-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-5-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-5-3').removeClass('show');
            $('#' + cardId).children('.suit-symbol-6-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-7-1').removeClass('show');
            $('#' + cardId).children('.suit-symbol-7-2').removeClass('show');
            $('#' + cardId).children('.suit-symbol-7-3').removeClass('show');
            break;
    }
}