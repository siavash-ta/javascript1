'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-4-shopping-at-the-supermarket

Let's do some grocery shopping! We're going to get some things to cook dinner
with. However, you like to spend money and always buy too many things. So when 
you have more than 3 items in your shopping cart the first item gets taken out.

1. Create an array called `shoppingCart` that holds the following strings: 
   "bananas" and "milk".

2. Complete the function named `addToShoppingCart` as follows:

   - It should take one argument: a grocery item (string)
   - It should add the grocery item to `shoppingCart`. If the number of items is
     more than three remove the first one in the array.
   - It should return a string "You bought <list-of-items>!", where 
     <list-of-items>is a comma-separated list of items from the shopping cart 
     array.

3. Confirm that your code passes the unit tests.
-----------------------------------------------------------------------------*/
const shoppingCart = ['bananas', 'milk'];
const list=['chocolate','waffles','tea'];
let i

  for (i=0;i<list.length;i++) {
  
  shoppingCart.push(list[i]);

  if (shoppingCart.length>3){
shoppingCart.shift();
  };
  console.log('you bought ',shoppingCart,' !');
};
console.log('you bought ',shoppingCart,' !');
