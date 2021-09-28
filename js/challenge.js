




let pause = false

let countId = setInterval(increment, 1000)

const pauseElement = document.getElementById('pause')

const changeButtonText = () => {
    if (!pause) {
        pauseElement.textContent = "resume"
        //change the button to one thing
    } else {
        pauseElement.textContent = "pause"
        //change the button to something else
    }
}


pauseElement.addEventListener('click', () => {

    if (pause) {
        countId = setInterval(increment, 1000)
    } else {
        clearInterval(countId)
    }
    changeButtonText()
    pause = !pause
    //do it here?
})

// grab the form element

const formElement = document.querySelector('form')
// const formElement2 = document.getElementById('comment-form')
// const formElement3 = document.querySelector('#comment-form')
// const formElement4 = document.querySelector('form#comment-form')

// add some listener to that form element
//const formSubmit = (e) => {}    <---- same but arrow syntax
function formSumbit(e) {
    // tell the listener what to do
    e.preventDefault()
    const userText = e.target.comment.value

    if (userText.length > 0) {
        // grab the container element
        const commentContainer = document.getElementById('list')
        // make a new element to put in the container
        const newElement = document.createElement('li')
        // add the user's text to the new element
        newElement.textContent = userText
        // append the new element to the container
        commentContainer.append(newElement)
        e.target.reset()
    }
}

formElement.addEventListener('submit', formSumbit )




// find the button in question
const minusElement = document.getElementById('minus')

const plusElement = document.getElementById('plus')



const numberElement = document.getElementById('counter')


//function decrement() {}    <--- old school syntax
const decrement = () => {
    // tell event what to do
    
    // select / grab whatever element is holding that number
    //    ^  DONE ABOVE ^
    
    // get the number out of the element
    const number = numberElement.innerText
    // subtract one from the number
    const newNumber = number - 1
    // put the new number in the element we selected
    numberElement.textContent = newNumber
}

// add event to button
minusElement.addEventListener('click', () => {

    if (!pause) {
        decrement()
    } 

})

function increment() {
    //we already grabbed the number element above (numberElement)

    //get the number out of the element
    const number = numberElement.innerText
    //add one to the number
    let newNumber = parseInt(number) + 1
    //put the new number in the element
    numberElement.textContent = newNumber
    //careful not to concatenate strings!  plus plus don't care!
}

plusElement.addEventListener('click', increment)

document.getElementById('heart').addEventListener('click', () => {
    //grab the container for new list elements
    const likeContainer = document.querySelector('.likes')
    const currentNumber = numberElement.innerText

    const foundElement = document.getElementById(`likes-${currentNumber}`)

    if (foundElement) {
        // we've already liked this number, the li is alread on the DOM, & we
        // just need to change what's in that li

        // grab that first sentence
        const fullText = foundElement.innerText

        // split the sentence into an array, so each element in the array is
        // a single word
        const words = fullText.split(' ')

        // grab the one part of the array with the current totalLikes
        const totalLikes = words[4]

        // change the value of the totalLikes to add one
        const ourNewNumber = parseInt(totalLikes) + 1

        //put the new number back in the array
        words[4] = ourNewNumber

        //join the array into a single sentence (i.e. "string")
        const newLikesSentence = words.join(' ')

        //append new sentence to DOM
        foundElement.innerText = newLikesSentence

    } else {
         //make a new li   <- because this is the first time we've like this
                           // number
        const newLi = document.createElement('li')
        newLi.id = `likes-${currentNumber}`
        //put string in li
        newLi.textContent = `${currentNumber} has been liked 1 times`
        //append li to dom
        likeContainer.append(newLi)
    }
   
})