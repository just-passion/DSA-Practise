// Example 1:

// Input:

// s = “(()())(())”

// Output:"()()()"

// Explanation

// The input string is “(()())(())”, with primitive decomposition “(()())” + “(())”. After removing outer parentheses of each part, this is “()()” + “()” = “()()()”.

// Example 2:

// Input:

// s = “(()())(())(()(()))”

// Output:"()()()()(())"

// Explanation

// The input string is “(()())(())(()(()))”, with primitive decomposition “(()())” + “(())” + “(()(()))”. After removing outer parentheses of each part, this is “()()” + “()” + “()(())” = “()()()()(())”.

// Example 2:

// Input:

// s = “()()”

// Output:""

function removeOuterParentheses(s) {
    let stack = [];
    let result = "";

    for (let ch of s) {
        if (ch === '(') {
            if (stack.length > 0) {
                result += ch;
            }
            stack.push(ch);
        } else {
            stack.pop();
            if (stack.length > 0) {
                result += ch;
            }
        }
    }
    return result;
}
