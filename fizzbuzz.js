// This is our main function
numbers = [3, 13, 5, 7];
words = ['Fizz', 'Fezz', 'Buzz', 'Bang']

function fizzbuzz() {
    console.log("Hello, World!");

    for (var i = 1; i <= 255; i++){
        txt =[];
        for (var j = 0; j < numbers.length; j++){
            if (i%numbers[j] == 0){
                txt.push(words[j]);
            }
        }

        if (i%11 == 0){
            txt = ['Bong'];
        }
        if (i%17 == 0){
            txt = txt.reverse();
        }
        
        
        if (txt.length == 0){
            console.log(i)
        } else {
            // tostring has commas unfortunately
            var output = '';
            for (var k = 0; k < txt.length; k++){
                output += txt[k];
            }
            console.log(output);
        }
    }

}

// Now, we run the main function:
fizzbuzz();

