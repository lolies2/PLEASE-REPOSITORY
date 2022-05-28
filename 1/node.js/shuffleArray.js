const unput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

const shuffleArr = (arr) => {
    for(let i=arr.length-1; i > 0; i --){
        let temp = arr[i];
        let r = Math.floor(Math.random()* (i+1));
        arr[i] = arr[r];
        arr[r = temp];
    }
    return arr;
}


