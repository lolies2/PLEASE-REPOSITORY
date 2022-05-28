const input = document.querySelector("input");
const button = document.querySelector(".btn");
const out = document.querySelector(".error");

button.onclick = function () {
    this.outerHTML.innerText = "";
    let upperCase = false;
    let lowerCase = false;
    let digits = false;
    let specialChars = false;
    let passwordLength = false;
    const special = "!@#$%^&*()_+|<>?/-";

    if (input.value != "") {
        let s = input.value;
        for (let i = 0; i < s.length; i++) {
            if (special.includes(s[i])) {
                specialChars = true
            }
            else if (!isNaN(+s[i])) {
                digits = true;
            }
            else if (s[i] == s[i].toLowerCase()) {
                lowerCase = true;
            }
            else if (s[i] == s[i].toUpperCase()) {
                upperCase = true;
            }
        }
        if (s.length >= 10) {
            passwordLength = true;
        }
        const errors = [lowerCase, upperCase, digits, specialChars, passwordLength];
        errors.forEach((el, index) => {
            if (el == false) {
                if (index == 0) {
                    out.innerText += "匯滙匯線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线\n";
                }
                else if (index == 1) {
                    out.innerText += "匯滙匯滙匯滙匯滙線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线\n";
                }
                else if (index == 2) {
                    out.innerText += 
                    "線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线\n"
                    ;
                }
                else if (index == 3) {
                    out.innerText += "線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线\n";
                }
                else if (index == 4) {
                    out.innerText += "線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线線綫线 \n";
                }
            }
        });
    }
}