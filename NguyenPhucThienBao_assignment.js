// YOU have to use a HOF.
// 1. Write a function that takes a string parameter, and it console "YES" if the string,
// contains 'y' other wise it console "NO".
// Example - 'Crazyy'

let example = 'Crazyy';


let findY = (string) => {
    if (string.toLowerCase().split('').find(checkY)) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}


const checkY = (letter) => letter === 'y'

findY(example);

// 2. Write a function that finds a factorial of a number.
// Example - 5! = 120 (Use a normal loop for this one.)

// function getFactorial(num) {
// logic
// return the value;
// }


function getFactorial(num){
    if (num == 1){
        return 1;
    } else {
        return num * getFactorial(num - 1);
    }
}

console.log(getFactorial(5));




//3. You have an array of students
// let studentList = [
//   { name: "Mike", marks: [80, 50, 60, 100] },
//   { name: "Daniel", marks: [40, 50, 100, 100] },
//   {
//     name: "Stacy",
//     marks: [20, 100, 50, 70],
//   },
// ];

// function getHighestAverageStudent() {
    // returns the student name with highest average marks
// }

let studentList = [
    { name: "Mike",   marks: [80, 50, 60, 100]  },
    { name: "Daniel", marks: [40, 50, 100, 100] },
    { name: "Stacy",  marks: [20, 100, 50, 70], },
];

function getHighestAverageStudent(){
    let highestAverage = 0;
    let highestAvgStudent = '';

    studentList.map((student) => {
        let studentMarks = student.marks;
        let studentName = student.name;
        
        let sum = studentMarks.reduce((total,mark) => total + mark, 0);
        let average = sum / studentMarks.length

        if (average > highestAverage){
            highestAverage = average;
            highestAvgStudent = studentName;
        }
    });
    return highestAvgStudent;
}

console.log(getHighestAverageStudent());


//4. HARD Question - You have to write a function that has the highest number of occurrences
// [ 20, 4, -10, 4, 11, 20, 4, 2]; // 4


/*
let arr = [ 20, 4, -10, 4, 11, 20, 4, 2];
function commonNumber(arr){
    let highestCount = 0;
    let mostCommonNumber ;
    for(i = 0; i < arr.length; i++){
        let count = 0;
        for(j = 0; j < arr.length; j++){
            if(arr[i] == arr[j]){
                count++
            }
        }
        if( count > highestCount){
            highestCount = count;
            mostCommonNumber = arr[i];
        };
    }

    return mostCommonNumber;
}  
commonNumber(arr); 
*/ 


function HOFcommon() {
    let arr = [ 20, 4, -10, 4, 11, 20, 4, 2];
    let highestCount = 0;
    let mostCommonNumber;

    arr.forEach((number) => {
        count = 0 ;
        arr.forEach((innerNum) => {
            if( number = innerNum ){
                count++;
            }
        });
        if( count > highestCount){
            highestCount = count; 
            mostCommonNumber = number;
        } 
    });

    return mostCommonNumber;
}
console.log(HOFcommon());


//5. You have to write a function that has to find a number which is unique in the array (I.e Only occured once)
// [20, 20, 11, 4, 11, 20, 2, 4]

let numArray = [20, 20, 11, 4, 11, 20, 2, 4];

function uniqueNumber(arr){
    let uniqueNum ;
    for(i = 0; i < arr.length; i++){
        let count = 0;
        for(j = 0; j < arr.length; j++){
            if(arr[i] == arr[j]){
                count++
            }
        }
        if( count == 1  ){                                      //if the number happen only 1 then it's the unique number
            uniqueNum = arr[i];
        };
    }

    return uniqueNum;
}

uniqueNumber(numArray);


//6. You have an arryay of palindromes and not palindromes,  and you have to return only palindromes array

// ['abc', 'aba', 'ccc', 'dca', 'a']

// ['aba', 'ccc', 'a']

// USE SPLIT REVERSE THEN JOIN FOR REVERSE STRING

// USE FILTER TO COMPARE THEM 


pldArray = ['abc', 'aba', 'ccc', 'dca', 'a'];

let newArray = pldArray.filter((letter) => {            //filter the letter
    let reverseString = reverseLetter(letter);          // Create reverse string to compare
    return letter === reverseString;                    // return the letter if equal to its reverse
});
 
// function to reverse the string
function reverseLetter(string){
    return string.split('').reverse().join('');
}


console.log(newArray)