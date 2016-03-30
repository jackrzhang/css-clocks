function updateCard(unit, column, value) {
    var cardId = unit + '-' + column;

    // Determine and update card color (red, black) randomly
    if ( Math.random() < 0.5 ) {
        $('#' + cardId).removeClass('black');
        $('#' + cardId).addClass('red');
    } else {
        $('#' + cardId).removeClass('red');
        $('#' + cardId).addClass('black');
    }

    // Determine card suit randomly
    var suitRandom = Math.random();
    if ( Math.random() < 0.25 ) {
        // spades
        var suit = '&#9824';
    } else if ( Math.random() < 0.5 ) {
        // hearts
        var suit = '&#9829';
    } else if ( Math.random() < 0.75 ) {
        // clubs
        var suit = '&#9827';
    } else {
        // diamonds
        var suit = '&#9830';
    }

    // Update card value
    $('#' + cardId).children('.card-value').html(value);

    // Update all suit symbols on card
    //updateSuitSymbols(cardId, suit, value);
}

function updateSuitSymbols(cardId, suit, value) {

    switch(value) {
        case 1:
            $(halfDominoQuery).children('.dot-one').removeClass('show');
            $(halfDominoQuery).children('.dot-two').removeClass('show');
            $(halfDominoQuery).children('.dot-three').removeClass('show');
            $(halfDominoQuery).children('.dot-four').removeClass('show');
            $(halfDominoQuery).children('.dot-five').removeClass('show');
            $(halfDominoQuery).children('.dot-six').removeClass('show');
            $(halfDominoQuery).children('.dot-seven').removeClass('show');
            $(halfDominoQuery).children('.dot-eight').removeClass('show');
            $(halfDominoQuery).children('.dot-nine').removeClass('show');
            break;
        case 2:
            $(halfDominoQuery).children('.dot-one').removeClass('show');
            $(halfDominoQuery).children('.dot-two').removeClass('show');
            $(halfDominoQuery).children('.dot-three').removeClass('show');
            $(halfDominoQuery).children('.dot-four').removeClass('show');
            $(halfDominoQuery).children('.dot-five').addClass('show');
            $(halfDominoQuery).children('.dot-six').removeClass('show');
            $(halfDominoQuery).children('.dot-seven').removeClass('show');
            $(halfDominoQuery).children('.dot-eight').removeClass('show');
            $(halfDominoQuery).children('.dot-nine').removeClass('show');
            break;
        case 3:
            $(halfDominoQuery).children('.dot-one').addClass('show');
            $(halfDominoQuery).children('.dot-two').removeClass('show');
            $(halfDominoQuery).children('.dot-three').removeClass('show');
            $(halfDominoQuery).children('.dot-four').removeClass('show');
            $(halfDominoQuery).children('.dot-five').removeClass('show');
            $(halfDominoQuery).children('.dot-six').removeClass('show');
            $(halfDominoQuery).children('.dot-seven').removeClass('show');
            $(halfDominoQuery).children('.dot-eight').removeClass('show');
            $(halfDominoQuery).children('.dot-nine').addClass('show');
            break;
        case 4:
            $(halfDominoQuery).children('.dot-one').addClass('show');
            $(halfDominoQuery).children('.dot-two').removeClass('show');
            $(halfDominoQuery).children('.dot-three').removeClass('show');
            $(halfDominoQuery).children('.dot-four').removeClass('show');
            $(halfDominoQuery).children('.dot-five').addClass('show');
            $(halfDominoQuery).children('.dot-six').removeClass('show');
            $(halfDominoQuery).children('.dot-seven').removeClass('show');
            $(halfDominoQuery).children('.dot-eight').removeClass('show');
            $(halfDominoQuery).children('.dot-nine').addClass('show');
            break;
        case 5:
            $(halfDominoQuery).children('.dot-one').addClass('show');
            $(halfDominoQuery).children('.dot-two').removeClass('show');
            $(halfDominoQuery).children('.dot-three').addClass('show');
            $(halfDominoQuery).children('.dot-four').removeClass('show');
            $(halfDominoQuery).children('.dot-five').removeClass('show');
            $(halfDominoQuery).children('.dot-six').removeClass('show');
            $(halfDominoQuery).children('.dot-seven').addClass('show');
            $(halfDominoQuery).children('.dot-eight').removeClass('show');
            $(halfDominoQuery).children('.dot-nine').addClass('show');
            break;
        case 7:
            $(halfDominoQuery).children('.dot-one').addClass('show');
            $(halfDominoQuery).children('.dot-two').removeClass('show');
            $(halfDominoQuery).children('.dot-three').addClass('show');
            $(halfDominoQuery).children('.dot-four').removeClass('show');
            $(halfDominoQuery).children('.dot-five').addClass('show');
            $(halfDominoQuery).children('.dot-six').removeClass('show');
            $(halfDominoQuery).children('.dot-seven').addClass('show');
            $(halfDominoQuery).children('.dot-eight').removeClass('show');
            $(halfDominoQuery).children('.dot-nine').addClass('show');
            break;
        case 8:
            $(halfDominoQuery).children('.dot-one').addClass('show');
            $(halfDominoQuery).children('.dot-two').removeClass('show');
            $(halfDominoQuery).children('.dot-three').addClass('show');
            $(halfDominoQuery).children('.dot-four').addClass('show');
            $(halfDominoQuery).children('.dot-five').removeClass('show');
            $(halfDominoQuery).children('.dot-six').addClass('show');
            $(halfDominoQuery).children('.dot-seven').addClass('show');
            $(halfDominoQuery).children('.dot-eight').removeClass('show');
            $(halfDominoQuery).children('.dot-nine').addClass('show');
            break;
        default: 
            $(halfDominoQuery).children('.dot-one').removeClass('show');
            $(halfDominoQuery).children('.dot-two').removeClass('show');
            $(halfDominoQuery).children('.dot-three').removeClass('show');
            $(halfDominoQuery).children('.dot-four').removeClass('show');
            $(halfDominoQuery).children('.dot-five').removeClass('show');
            $(halfDominoQuery).children('.dot-six').removeClass('show');
            $(halfDominoQuery).children('.dot-seven').removeClass('show');
            $(halfDominoQuery).children('.dot-eight').removeClass('show');
            $(halfDominoQuery).children('.dot-nine').removeClass('show');
            break;
    }
}