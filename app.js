//function to generate random rgb colour
function genColor() {
    r = Math.floor(Math.random()* 255);
    g = Math.floor(Math.random()* 255);
    b = Math.floor(Math.random()* 255);
    return `rgb(${r}, ${g}, ${b})`;
}


//function to generate a random number
function genRandNum(num) {
    return Math.floor(Math.random() * num)
}


//Generate as many colors as you need
function genRandColors(numInput) {
    for (let i=1; i<=numInput; i++) {
        gameColors.push(genColor(numInput))
    }    
}


function changeButtonBackground(numInput) {
    const buttons = document.querySelectorAll('button')
    for (let button of buttons) {
        button.addEventListener('click', function(){
            button.style.backgroundColor = gameColors[genRandNum(numInput)]
            document.body.style.background = genColor()
            button.style.color = genColor()
            button.style.borderColor = genColor()
        })
    }
}

//Function to stop code repeating
function allColors() {
    gameColors = []
    genRandColors(numInput)
    targetIndex = genRandNum(numInput)
    console.log(`Your target Color is ${gameColors[targetIndex]}`)
}


//When generate random is pressed, a random number between 3-12 is generated.
//Thaose colors are saved in the gameColors array
//the target color index is generated and saved at targetIndex
//the target color is saved as targetColor
const genRandButton = document.querySelector('#genRandForm')
genRandButton.addEventListener('submit', function(e){
    e.preventDefault();
    const numInput = genRandNum(10) + 3;
    document.getElementById('colorsPlayingWith').append(`${numInput} colours`)
    gameColors = []
    genRandColors(numInput)
    targetIndex = genRandNum(numInput)
    targetColor = gameColors[targetIndex]
    document.getElementById('targetColorBlock').style.backgroundColor = targetColor
    document.getElementById('targetColorBlock').style.color = targetColor = targetColor
    changeButtonBackground(numInput)
})

//saves number of colors user wishes to generate to variable numInput
//Those colors are saved in the gameColors array
//the target color index is generated and saved at targetIndex
//the target color is saved as targetColor
const colorsNum = document.querySelector('#colorsForm')
colorsNum.addEventListener('submit', function(e){
    e.preventDefault();
    const numInput = colorsForm.elements.num.value;
    document.getElementById('colorsPlayingWith').append(`${numInput} colours`)
    gameColors = []
    genRandColors(numInput)
    targetIndex = genRandNum(numInput)
    targetColor = gameColors[targetIndex]
    document.getElementById('targetColorBlock').style.backgroundColor = targetColor
    document.getElementById('targetColorBlock').style.color = targetColor
    changeButtonBackground(numInput)
})





