let passwordBox = document.getElementById("password")
let generate = document.getElementById("generate")

let lngth = 12;

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let num = "1234567890";
let symbol = "!@#$%^&*()_-+={}[]|\';:,./?"
let allChar = upperCase + lowerCase + num + symbol;

function createPassword(){
    let password = "";
    // password += upperCase[Math.floor(Math.random() * upperCase.length)];
    // password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    // password += num[Math.floor(Math.random() * num.length)];
    // password += symbol[Math.floor(Math.random() * symbol.length)];

    while(lngth > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    return password;
}
createPassword()
 generate.addEventListener("click", () => {
    passwordBox.value = createPassword();
 })
 let copy = document.getElementById("copytext")
 copy.addEventListener("click", ()=> {
    let newText = passwordBox
    newText.select()
    navigator.clipboard.writeText(newText.value)
    copy.src= "check-double-line.svg"
    setTimeout(() => {
        copy.src = "file-copy-line.svg"
    }, 500);
 })
let clearText = document.querySelector("#cleartext")
clearText.addEventListener("click", ()=> {
    passwordBox.value = "";
})