var emptytilePosRow = 1;
var emptytilePosCol = 2;
var cellDisplacement = '69px';
var moveTile = function (e) {
    // Gets the position of the current element
    var pos = $(this).attr('data-pos');
    var posRow = parseInt(pos.split(',')[0]);
    var posCol = parseInt(pos.split(',')[1]);
    // ...
};
