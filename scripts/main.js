function executeCaesar() {
    let shift = parseInt(document.querySelector("#shift").value);
    let plaintext = document.querySelector("#plaintext").value;
    let cipher = caesarShift(plaintext, shift);
    console.log("cipher: " + cipher);
    document.getElementById("caesar_result").innerHTML = cipher;
}