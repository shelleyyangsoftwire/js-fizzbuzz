// This is our main function
numbers = [3, 5, 7];
words = ['Fizz', 'Buzz', 'Bang']

function fizzbuzz() {
    console.log("Hello, World!");

    for (var i = 1; i <= 100; i++){
        txt ='';
        for (var j = 0; j < numbers.length; j++){
            if (i%numbers[j] == 0){
                txt += words[j];
            }
        }
        if (txt==''){
            console.log(i)
        } else {
            console.log (txt);
        }
    }

}

// Now, we run the main function:
fizzbuzz();

