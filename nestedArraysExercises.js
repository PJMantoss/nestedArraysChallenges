//Exercise 1: Given the following array, write a function called printEvens that console.logs all of the even numbers

var nestedArr = [[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]];

function printEvens(){
   let newArr = nestedArr;
    for (let i=0; i<newArr.length; i++){
        for (let j=0; j < newArr[i].length; j++){
            if (newArr[i][j] % 2 === 0){
                console.log(newArr[i][j]);        
            }
        }
    }
};


printEvens();
