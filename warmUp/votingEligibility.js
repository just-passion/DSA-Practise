function isEligibleForVoting(age) {
    return age>=18;
}

console.log(isEligibleForVoting(1) ? "is eligible for voting" : "is not eligible for voting");
