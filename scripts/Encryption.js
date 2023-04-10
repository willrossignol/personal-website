function caesarShift(string, shift){
    let cipher = "";
    for (let i = 0; i < string.length; i++) {
        let shifted_char = shiftCharBy(string.charCodeAt(i), shift);
        cipher += String.fromCharCode(shifted_char);
    }
    console.log(cipher);
    return cipher;
}

function shiftCharBy(char, shift) {
    const min_lowercase = 97; // a
    const max_lowercase = 122; // z
    const min_uppercase = 65; // A
    const max_uppercase = 90; // Z

    if ( min_lowercase <= char && char <= max_lowercase) {
        return shiftUsingLimits(char, shift, min_lowercase, max_lowercase);
    }
    else if (min_uppercase<= char && char <= max_uppercase) {
        return shiftUsingLimits(char, shift, min_uppercase, max_uppercase);
    }

    return char;
}

function shiftUsingLimits(char, shift, lower, upper) {
    let result = char + shift;

    return recurDiffCalc(lower, upper, result);
}

function recurDiffCalc(lower, upper, result) {
    if (lower <= result && result <= upper ){
        return result;
    }

    if (result > upper) {
        let difference = result - (upper + 1);
        return recurDiffCalc(lower, upper, lower + difference);
    }

    if (result < lower) {
        let difference = result - (lower - 1);
        return recurDiffCalc(lower, upper, upper - difference);
    }
}