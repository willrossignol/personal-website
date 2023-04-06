function executeCaesar() {
    let plaintext = document.querySelector("#plaintext").value;
    console.log("plaintext:" + plaintext);
    let shift = parseInt(document.querySelector("#shift").value);
    console.log("shift: " + shift);
    let cipher = shiftStringBy(plaintext, shift);
    console.log("cipher: " + cipher);
    document.getElementById("caesar_result").innerHTML = cipher;
}

function shiftStringBy(string, shift){
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

    console.log(char);

    if (result > upper) {
        let difference = result - (upper + 1);
        return lower + difference;
    }
    if (result < lower) {
        let difference = result - (lower - 1);
        return upper - difference;
    }

    return result;
}