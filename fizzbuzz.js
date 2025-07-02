// This is our main function
numbers = [3, 13, 5, 7];
words = ['Fizz', 'Fezz', 'Buzz', 'Bang']

function fizzbuzz(max) {
    console.log("Hello, World!");

    for (var i = 1; i <= max; i++){
        var text =[];
        for (var j = 0; j < numbers.length; j++){
            if (i%numbers[j] == 0){
                text.push(words[j]);
            }
        }

        if (i%11 == 0){
            text = ['Bong'];
        }
        if (i%17 == 0){
            text = text.reverse();
        }
        
        
        if (text.length == 0){
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

// ask for a max
//const max = 255;

// readline bit acquired from w3schools

const { createInterface } = require('readline');
//std = standard input/output?

const getInput = createInterface ({
    input: process.stdin,
    output: process.stdout
});


// Now, we run the main function:
getInput.question ('What is the maximum number you would like FizzBuzz to go to?  ', (answer) =>{
    fizzbuzz(answer);
    getInput.close();
});




