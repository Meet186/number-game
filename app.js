let randomNumber = parseInt(Math.random() *  100 + 1);
const sumbit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhi = document.querySelector('.lowOrhi');
const startOver = document.querySelector('.resultparas');


const p = document.createElement('p')
let wrong = document.createElement('div')
    wrong.classList.add('div-red')
    document.body.appendChild(wrong)
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    sumbit.addEventListener('click', function(e){
        e.preventDefault()  
     const guess =   parseInt(userInput.value)
     
     
     vlaidatGuess(guess)
    })
   
}

function vlaidatGuess(guess){
    if(isNaN(guess)){
        wrong.innerHTML = `please enter a valid number`
    }
    else if (guess < 1){
        wrong.innerHTML = (`please enter a number grater than 0`)

    }

    else if (guess > 100){
        wrong.innerHTML = (`please enter a number less than 101`)

    }

    else{
        prevGuess.push(guess)
        if(numGuess == 11){
            displayGuess(guess)
            displayMessage(`Game over ANS was ${randomNumber}`)
            endGame()

        }
        else{
            displayGuess(guess)
            checkGuesss(guess)
        }
    }
}

function checkGuesss(guess){

        if(guess === randomNumber){
            endGame()
            displayMessage(`you Won`)
            
           
        }
        else if (guess < randomNumber){
            wrong.remove()
            displayMessage(`number is too low`)
        }

        else if (guess > randomNumber){
            displayMessage(`number is too high`)
        }
}

function displayGuess(guess){

    userInput.value = '';
    guessSlot.innerHTML += `${guess},`;
    numGuess++;
    remaining.innerHTML = `${ 1 + 11 - numGuess }`
    

}


function displayMessage(message){
lowOrhi.innerHTML = `<h2>${message}<h2/>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', "")
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame" > Start new Game <h2/>`
    startOver.append(p)
    playGame = false
    newGame()
}


function newGame(){
       
        const newGameButton =  document.querySelector('#newGame')
        
        newGameButton.addEventListener('click',function(e){
            randomNumber = parseInt(Math.random() *  100 + 1);
            prevGuess = []
            numGuess = 1
            guessSlot.innerHTML = ""
            remaining.innerHTML = `${ 11 - numGuess}`
            userInput.removeAttribute('disabled')
            startOver.removeChild(p)
            playGame = true
            displayMessage(``)
        })

        
}




console.log(randomNumber)