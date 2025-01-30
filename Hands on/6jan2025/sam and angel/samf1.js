/*
sam is having 75 candies and he gives half of it to angel since angel loves sam alot, she gives back half of its portion. 
Calculate and display individually how many candies sam and angel are having.
calculation should be made in one line.
use function without argument and return value.
*/

function calculateCandies() {
    // Initial candies and calculation in one line
    let sam = 75, angel = ((sam /= 2), sam / 2, (sam += sam / 2), sam / 4);

    // Display the result
    console.log(`Sam has ${sam} candies.`);
    console.log(`Angel has ${angel} candies.`);
}

// Call the function
calculateCandies();
