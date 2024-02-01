/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let myString = s.replace(/[^A-Z0-9]/ig, "").toLowerCase()
    let index = 1
    for (i = 0; i < myString.length; i++) {
        if (myString[i] !== myString[myString.length - index]) {
            return false
        }
        index += 1
    }
    return true
};