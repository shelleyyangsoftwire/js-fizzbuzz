//Allowing users to specify their own functions would work for 3 - 11,
// just by allowing them to set via command line the contents of the words array
// allowing them to specify reordering operations like 17 would be harder, as it is a different
// type of change not captured in the arrays i've made -- possibly an array of predefined functions
// attachable to any number will make this easier to change via user command line inputs?

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

const { createInterface } = require('readline');
//std = standard input/output?

const getInput = createInterface ({
    input: process.stdin,
    output: process.stdout
});

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










