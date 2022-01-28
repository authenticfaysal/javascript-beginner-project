const hexSymbols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
// select eventlistener button
const btn = document.getElementById('btn');
// color code 
const color = document.querySelector('.color');

// Add event listener to the button when user clicks it
btn.addEventListener('click', function() {
    let hexValue = '#';
    //generate random hex code
    for (i=0; i<6; i++) {
        hexValue += hexSymbols[getRandomNumber()];
    }

    //change background color
    document.body.style.backgroundColor = hexValue;
    //show the hexcode used in background
    color.textContent = hexValue;
})

// Generate a random number between as equal to the length of hexSymbols array
function getRandomNumber () {
    return Math.floor(Math.random() * hexSymbols.length)
}