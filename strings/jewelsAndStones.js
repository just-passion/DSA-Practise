// Problem Statement:
// You’re given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is different from "A".

// Example:
// Input: jewels = “aA”, stones = “aAAbbbb”
// Output: 3

// Input: jewels = “z”, stones = “ZZ”
// Output: 0

// Approach:
// Use a Set (or hash set) to store all characters from jewels.
// Loop through each character in stones.
// Increment a counter for every character found in the jewels set.

var numJewelsInStones = function(jewels, stones) {
    let jSet = new Set(jewels);
    let count = 0;
    for (let c of stones) {
        if (jSet.has(c)) count++;
    }
    return count;
};