let keys = document.querySelectorAll("span");
let keyPad = document.querySelector(".key");
let display = document.querySelector(".display");

let capsLockMode = false

for (let i=0; i < keys.length; i++){
    keys[i].onclick = function(){
        if (keys[i].classList.contains("caps")) {
            keys[i].classList.toggle("active");
            keyPad.classList.toggle("uppercase");
            capsLockMode == true ? capsLockMode=false:capsLockMode=true; 
        } else if (keys[i].classList.contains("backspace")){
            let str = display.innerText;
            display.innerText = str.substring(0, (str.length - 1));
        } else {
            if(capsLockMode == true) {
                display.innerText += keys[i].dataset.key.toUpperCase();
            } else {
                display.innerText += keys[i].dataset.key.toLowerCase();
            }
        }
    }
}

