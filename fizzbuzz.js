// This is our main function
function fizzbuzz() {
    console.log("Hello, World!");

    for (var i = 1; i <= 100; i++){
        txt ='';
        if (i%3 == 0){
            txt += 'Fizz';
        }
        if (i%5 == 0){
            txt += 'Buzz';
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

