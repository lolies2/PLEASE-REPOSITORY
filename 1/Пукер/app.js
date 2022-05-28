let array = [5, 5, 5, 12, 13]
// (3, 3) (11, 1) (12, 1)  
// (3, 4) (12, 1) "Каре"
// (3, 5)  "Шуллер"
// (5, 3) (12, 2)  "Фулл хауз"
// (5, 3) (12, 1) (13, 1) "Сет"
// (5, 2) (7, 1) (10, 1) (8,1) "Пара"
// (5,2) (6,2) (14,1) "2 Пары"
// (10, 1) (11, 1) (12, 1) (13, 1) (14,1)
// [10, 11, 12, 13, 14]

function checkPockerCards(arr){
    const map = new Map();

    for (let i=0; i<arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], 1);
        } else {
            map.set(arr[i], map.get(arr[i]) + 1);
        }
    }
    
    if (map.size == 1) {
        return "Шуллер";
    } else {
        for (let card of map.keys()){
            if (map.get(card) == 4) {
                return "Каре";
            } else if (map.size == 2 && map.get(card) == 3){
                return "Фулл Хауз";
            } else if (map.size == 3 && map.get(card) == 3) {
                return "Сет";
            } else if (map.size == 4 && map.get(card) == 2) {
                return "Пара";
            } else if (map.size == 3 && map.get(card) == 2) {
                return "Две пары";
            } else if (map.size == 5) {
                let keyArray = [];
                for(let key of map.keys()) {
                    keyArray.push(key);
                }
                keyArray.sort((a, b) => a - b);
                if (keyArray[4] - keyArray[0] == 4) {
                    return "Стрит";
                } else {
                    return "Старшая карта";
                }
            }
        } 
    }
}

const care = [11, 11, 10, 11, 11];
const fullHouse = [10, 10, 13, 13, 13];
const street = [2, 3, 4, 5, 6];
const set = [14, 14, 14, 2 , 3];
const doublePaire = [3, 3, 5, 6, 6];
const paire = [5, 11, 12, 13, 5];
const oldestCard = [2, 5, 8, 9, 11];

/* console.log( checkPockerCards(care), "Каре" );
console.log( checkPockerCards(fullHouse), "ФулХауз" );
console.log( checkPockerCards(street),"Стрит" );
console.log( checkPockerCards(set), "Сет" );
console.log( checkPockerCards(doublePaire), "ДВОЙНАЯ ПАРА" );
console.log( checkPockerCards(paire), "Пара" );
console.log( checkPockerCards(oldestCard), "Старшая карта" ); */

document.querySelector("button").onclick = function() {
    window.location.reload()
}

window.onload = function(){
    let cards = []
    for(let i = 0 ; i < 5; i++) {
        cards[i] = Math.floor(Math.random()*12 + 2)
    }
    for(let card of cards) {
        document.querySelector(".container").innerHTML += `<img src="img/${card}.png">`
    }
    
    document.querySelector(".result").innerText = checkPockerCards(cards)
}