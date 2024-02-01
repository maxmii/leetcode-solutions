/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
    let no_losts = []
    let one_lost = []
    let score_board = {}
    let player_matches = {}
    for (players in matches) {
        if (!player_matches[matches[players][0]]) {
            player_matches[matches[players][0]] = 1
        } else {
            player_matches[matches[players][0]] += 1
        }
        if (!player_matches[matches[players][1]]) {
            player_matches[matches[players][1]] = 1
        } else {
            player_matches[matches[players][1]] += 1

        }






        if (score_board[matches[players][0]] === undefined) {
            score_board[matches[players][0]] = 1

        } else {
            score_board[matches[players][0]] += 1

        }
        if (score_board[matches[players][1]] === undefined) {
            score_board[matches[players][1]] = 0
        }
    }

    for (items in player_matches) {
        if (player_matches[items] - score_board[items] === 0) {
            no_losts.push(Number(items))
        } else if (player_matches[items] - score_board[items] === 1) {
            one_lost.push(Number(items))
        }
    }
    return [no_losts, one_lost]
};