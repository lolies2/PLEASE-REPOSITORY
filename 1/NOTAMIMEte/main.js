const container = document.querySelector(".container");
const button = document.querySelector("button");

for (let i = 0; i < 100; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    container.appendChild(block);
}

function generate() {
    anime({
        targets: ".block",
        translateX: function(){
            return anime.random(-700, 700)
        },
        translateY: function(){
            return anime.random(-700, 700)
        },
        translateZ: function(){
            return anime.random(-10, 10)
        },
        scale: function(){
            return anime.random(1, 5)
        }
    })
}

button.onclick = generate;

generate();