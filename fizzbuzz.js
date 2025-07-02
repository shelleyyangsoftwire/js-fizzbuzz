//Experimental attempt to let the user create whatever rules they want

class multipleRule{
    constructor(active, number, word, action){
        this.active = active;
        this.number = number;
        this.word = word;
        this.action = action;
    }
}

// eligible actions
const validActions = ['append', 'prepend', 'reverse'];
function addtoEnd(text, word){
    text.push(word);
}
function addtoStart(text, word){
    text.unshift(word);
}
function reverse(text){
    text.reverse();
}

// check user input is actually workable
function checkValidInput(answer){
    if (answer.trim() === ''){
        console.log ('No input. Try again!');
        return false;
    } else {
        answer = answer.split(';');
        if (answer.length > 5){
            console.log ('Too many rules. Try again!');
            return false;
        }
    }
}


const { createInterface } = require('readline');
//std = standard input/output?

const getInput = createInterface ({
    input: process.stdin,
    output: process.stdout
});

getInput.question (`Enter some rules in the format: \n
number, word, action; number, word, action; \n\n
You may enter any positive integer and word. \n
There are only three actions: Append, Prepend, and Reverse.\n
Reverse does not add any words -- what you write will be ignored, simply put a space -- eg. 3, , Reverse \n
Any entries that does not fit the format will also be ignored.`, (answer) =>{

    if (checkValidInput(answer) === false){
        getInput.close();
        process.exit();
    }

    getInput.question ('What is the maximum number you would like FizzBuzz to go to?  ', (answer) =>{
        //fizzbuzz(answer);
        getInput.close();
    });

});




/*
numbers = [3, 13, 5, 7, 11];
active = [false, false, false, false, false];
words = ['Fizz', 'Fezz', 'Buzz', 'Bang', 'Bong'];
active17 = false;

function fizzbuzz(max) {
    console.log("Hello, World!");

    for (var i = 1; i <= max; i++){
        var text =[];
        for (var j = 0; j < numbers.length; j++){
            if (i%numbers[j] === 0 && active[j] === true){
                text.push(words[j]);
            }
        }

        if (text.includes('Bong') === true){
            text = ['Bong'];
        }

        if (i%17 === 0 && active17 === true){
            text = text.reverse();
        }
        
        if (text.length === 0){
            console.log(i)
        } else {
            // tostring has commas unfortunately
            var output = '';
            for (var k = 0; k < text.length; k++){
                output += text[k];
            }
            console.log(output);
        }
    }

}

// readline bit acquired from w3schools


function makeActive(answer){
    answer = answer.trim();
    let thisMultiple = Number(answer);
    let activeIndex = numbers.indexOf(thisMultiple);
    if (activeIndex >= 0){
        active[activeIndex] = true;
        console.log(thisMultiple + ' has been added!');
        return true;
    } else if (thisMultiple == 17) {
        active17 = true;
        console.log(thisMultiple + ' has been added!');
        return true;
    }
    console.log (answer + ' is not a valid value. Its presence has been ignored.');
    return false;
}

// Now, we run the main function:
getInput.question ('Enter a multiple to process, separated by commas. eg: 3, 5, 7, 11, 13, 17\n', (answer) =>{
    if (answer === ''){
        console.log ('No input. Try again!');
    } else {
        answer = answer.split(',');
        for (var i = 0; i < answer.length; i++){
            makeActive(answer[i]);
        }
    }
    getInput.question ('What is the maximum number you would like FizzBuzz to go to?  ', (answer) =>{
        fizzbuzz(answer);
        getInput.close();
    });
});




*/




