// Problem Statement:
// You are given a 0-indexed array of strings words and a character x. Return an array of indices representing the words that contain the character x.

// The returned array can be in any order.

// Example:
// Input: words = [“leet”, “code”], x = “e”
// Output: [0, 1]

// Input: words = [“abc”, “bcd”, “aaaa”, “cbc”], x = “a”
// Output: [0, 2]

// Input: words = [“abc”, “bcd”, “aaaa”, “cbc”], x = “z”
// Output: []

// Approach:
// Use two nested loops: Outer loop for each word, inner loop for each character in the word.
// If character x is found in a word, push its index to the result array and break.


var findWordsContaining = function(words, x) {
    let res = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] === x) {
                res.push(i);
                break;
            }
        }
    }
    return res;
};
   