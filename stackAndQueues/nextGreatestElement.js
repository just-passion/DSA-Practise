// Examples:
// Example 1:

// Input:

// nums1 = [4,1,2], nums2 = [1,3,4,2]

// Output:[-1,3,-1]

// Explanation

// The next greater element for each value of nums1 is as follows: - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1. - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3. - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

// Example 2:

// Input:

// nums1 = [2,4], nums2 = [1,2,3,4]

// Output:[3,-1]


// Steps
// nums1 = [4, 1, 2]
// nums2 = [1, 3, 4, 2]


// Step	current (nums2)	Stack Before	Pops → Map Updates	Stack After
// 1	1	[]	—	[1]
// 2	3	[1]	pop 1 → map[1]=3	[3]
// 3	4	[3]	pop 3 → map[3]=4	[4]
// 4	2	[4]	— (2 is not > 4)	[4,2]
// End	—	[4,2]	remaining → map[2]=-1, map[4]=-1	[]

// 1 → 3
// 3 → 4
// 4 → -1
// 2 → -1

// nums1 = [4,1,2]  →  [-1,3,-1]

function nextGreaterElement(nums1, nums2) {
  const stack = [];
  const map = new Map();

  for (let num of nums2) {
    while (stack.length && num > stack[stack.length - 1]) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }

  while (stack.length) {
    map.set(stack.pop(), -1);
  }

  return nums1.map(x => map.get(x));
}


