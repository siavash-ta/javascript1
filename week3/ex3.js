'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-3-be-your-own-fortune-teller

Why pay a fortune teller when you can just program your fortune yourself?

1. Create four arrays, `numKids`, `partnerNames`, `locations` and `jobTitles`. 
   Give each array five random values that have to do with the name of 
   the variable.

2. Complete the function `selectRandomly`. This function should take an array 
   as a parameter and return a randomly selected element as its return value.

3. Complete the function named `tellFortune` as follows:

   - It should take four arguments (in the order listed): 
     * the array with the options for the number of children, 
     * the array with the options for the partner's name, 
     * the array with the options for the geographic location and 
     * the array with the options for the job title.
   - It should use the `selectRandomly` function to randomly select values from 
     the arrays.
   - It should return a string: "You will be a `jobTitle` in `location`, 
    married to `partnerName` with `numKids` kids."

4. Call the function three times, passing the arrays as arguments. Use `
   console.log` to display the results.

Note: The DRY principle is put into practice here: instead of repeating the code to 
randomly select array elements four times inside the `tellFortune` function 
body, this code is now written once only in a separated function.
-----------------------------------------------------------------------------*/

// This function should take an array as its parameter and return
// a randomly selected element as its return value.
function selectRandomly(parameter /* TODO parameter(s) go here */ ) {
    // TODO complete this function
    let x = Math.random() * 4;
    let j = Math.round(x);
    return parameter[j];
}

function tellFortune(a, b, c, d /* TODO add parameter(s) here */ ) {
    // TODO complete this function
    let tellFortune = [selectRandomly(a), selectRandomly(b), selectRandomly(c), selectRandomly(d)];
    return tellFortune;

}

function main() {
    const numKids = ['1', '2', '3', '4', '5'
        // TODO add elements here
    ];

    const partnerNames = ['faranak', 'faranak', 'faranak', 'faranak', 'faranak'
        // TODO add elements here
    ];

    const locations = ['iran', 'canada', 'australia', 'germany', 'switzerland'
        // TODO add elements here
    ];

    const jobTitles = ['manager', 'engineer', 'web developer', 'housekeeper', 'teacher'
        // TODO add elements here
    ];

    console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
    console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
    console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}
main();
// // ! Do not change or remove the code below
// if (process.env.NODE_ENV !== 'test') {
//     main();
// }
// module.exports = tellFortune;