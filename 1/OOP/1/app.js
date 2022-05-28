const animal = {
    "name": "default",
    "color": "black",
    "brade": "home",
    "voice": function(){
        console.log("меня зовут =  ", this.name);
    },
    "eat": function(){
        console.log(this.name, "кушает")
    }

}

const cat = {
    __proto__: animal,
    "voice": function(){
        console.log("мяу-мяу =", this.name);
    }        
        
}

cat.name = "myrzik";
cat.color = "black";
cat.brade = "home";
//cat.voice();
cat.eat();

const dog = {
    __proto__: animal,
    "voice": function(){
        console.log("гав-гав =", this.name);
    }
}

dog.name = "luke";
dog.color = "black";
dog.brade = "putbyle";
//dog.voice();
dog.eat();

console.log(animal, cat, dog);

