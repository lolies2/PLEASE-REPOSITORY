// public
// private
// protected 
// static

class User {
    #company = "Рога и Копыта";
    #greating = "Компания Рога и Копыта приветствует Вас"; 

    constructor(name, age, job){
        /* this._name = name; // protected
        this._age = age;   // protected
        this._job = job;   // protected */
    }

    set name(name){
        name = name.trim();
        name = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
        if (name.length < 2 || name.length > 24) {
            this._name = "Вася";
        } else {
            this._name = name;
        }        
    }
    
    set age(age) {
        if (age > 14 && age < 100) {
            this._age = age;
        } else {
            this._age = 0;
        }       
    }

    set job(job) {
        if (job == "JavaScript" || job == "PHP" || job == "Python" || job == "Java"){
            this._job = job;
        } else {
            this._job = "Not Allowed";
        }        
    }

    get name(){
        return this._name;
    }

    get age() {
        return this._age;
    }

    get job() {
        return this._job;
    }

    getAllData() {
        return this.#greating +" "+ this._name + " " + this._age + "bru "+ this._job; 
    }



    set company(name) {
        this.#company = name
    }

    get company(name) {
        return this.#company;
    }
}