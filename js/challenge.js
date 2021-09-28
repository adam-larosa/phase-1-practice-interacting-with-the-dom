

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
minusElement.addEventListener('click', decrement)

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
    const currentNumber = numberElement.textContent

    const foundElement = document.getElementById(`likes-${currentNumber}`)

    if (foundElement) {
        const fullText = foundElement.innerText
        const words = fullText.split(' ')
        const ourNewNumber = parseInt(words[4]) + 1
        words[4] = ourNewNumber
        foundElement.innerText = words.join(' ')
    } else {
         //make a new li
        const newLi = document.createElement('li')
        newLi.id = `likes-${currentNumber}`
        //put string in li
        
        newLi.textContent = `${currentNumber} has been liked 1 times`
        
        //append li to dom
        likeContainer.append(newLi)
    }
   
})