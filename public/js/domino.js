function updateDomino(unit, column, value) {
    var halfDominoIdPrefix = unit + '-' + column;
    var valueTop, valueBottom;

    // Randomly split new domino value into two integer values for each half domino
    if ( value <=6 ) {
        valueTop = Math.floor(Math.random() * (value + 1));
    } else { // value > 6
        valueTop = Math.floor(Math.random() * (6 - (value-6) + 1) + value-6);
    }
    valueBottom = value - valueTop;

    updateHalfDomino(halfDominoIdPrefix, 'top', valueTop);
    updateHalfDomino(halfDominoIdPrefix, 'bottom', valueBottom);
}

function updateHalfDomino(halfDominoIdPrefix, halfDominoSide, value) {
    var halfDominoQuery = '#' + halfDominoIdPrefix + '-' + halfDominoSide;

    switch(value) {
        case 0:
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
        case 1:
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
        case 2:
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
        case 3:
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
        case 4:
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
        case 5:
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
        case 6:
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