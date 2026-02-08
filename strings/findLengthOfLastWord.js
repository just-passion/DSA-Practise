// Example:
// Input: s = “Hello World”
// Output: 5

// Input: s = ” fly me to the moon “
// Output: 4

// Input: s = “luffy is still joyboy”
// Output: 6

// Approach:
// Start from the end and skip trailing spaces.
// Count characters until the next space or beginning of string.
// This gives the length of the last word efficiently.


var lengthOfLastWord = function(s) {
    let n = s.length - 1;
    let count = 0;

    while (n >= 0) {
        if (s[n] !== " ") {
            count++;
        } else if (count > 0) {
            break;
        }
        n--;
    }

    return count;
};