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


printEvens(); // 2,4,6,8,10,12

//Ex 2: Given the following array, write a function called sumTotal returns the sum of all numbers in the array
var nestedArr = [[1, 2], [3, 4], [5, 6]];

function sumTotal(){
    let totalSum = 0;
    for (let i=0; i < nestedArr.length; i++){
        for (let j=0; j < nestedArr[i].length; j++){
           totalSum += nestedArr[i][j];
        }
    }
    console.log(totalSum);
}

sumTotal(); //21
