//TODO: Assign each crystal a random value from of 1-12 that is     hidden to the player
var blueGem = Math.floor(Math.random() * 12) + 1;
var purpleGem = Math.floor(Math.random() * 12) + 1;
var greenGem = Math.floor(Math.random() * 12) + 1;
var redGem = Math.floor(Math.random() * 12) + 1;

//TODO: Assign a random opponent number to compare against,         from 19-120. Don't forget to create and call the function       for it to show up on the page
var opponentNum = Math.floor(Math.random() * 101) + 19;
function newOppNum() {
    $('#random-num').html(opponentNum);
}
newOppNum();

//TODO: Assign variables for player total, wins, and losses
var wins = 0;
var losses = 0;
var playerTotal = 0;

//TODO: On button/gem click the number assigned should add to       the player's total score. The player can continue to add/       click gems until they match or go over the opponent number.

$('button.blue').click(function gemSum() {
    playerTotal = blueGem + playerTotal;
    $('.total-score').html(playerTotal);
    winsIncr();
    lossesIncr();
});

$('button.purple').click(function gemSum() {
    playerTotal = purpleGem + playerTotal;
    $('.total-score').html(playerTotal);
    winsIncr();
    lossesIncr();
});

$('button.green').click(function gemSum() {
    playerTotal = greenGem + playerTotal;
    $('.total-score').html(playerTotal);
    winsIncr();
    lossesIncr();
});

$('button.red').click(function gemSum() {
    playerTotal = redGem + playerTotal;
    $('.total-score').html(playerTotal);
    winsIncr();
    lossesIncr();
});

//TODO: Wins: the player must match the opponent number. Each       game won must be added to 'wins' 
function winsIncr() {
    if (playerTotal === opponentNum) {
        $('.wins').html(++wins);
        newOppNum();
    }
};



//TODO: Losses: if the player goes over the opponent number         they lose. Each loss must be added to the 'losses'
function lossesIncr() {
    if (playerTotal > opponentNum) {
        $('.losses').html(++losses);
        newOppNum();
    }
};

//TODO: Need a reset to assign new numbers to the gems for each     new game. Page refresh will not work as that will clear the     wins and losses

