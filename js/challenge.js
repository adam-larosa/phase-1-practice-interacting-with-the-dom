
const counterElement = document.querySelector( '#counter' )

const minusButton = document.querySelector( '#minus' )
const plusButton = document.querySelector( '#plus' )
const heartButton = document.querySelector( '#heart' )
const likesContainer = document.querySelector( '.likes' )

const formElement = document.getElementById( 'comment-form' )
const commentsContainer = document.querySelector( '#list' )

const submitButton = document.getElementById( 'submit' )

const pauseButton = document.querySelector( '#pause' )

const buttonElements = [ minusButton, plusButton, heartButton, submitButton ] 


let pauseStatus = false

let intervalID = setInterval( increment, 1000 )


pauseButton.addEventListener( 'click', e => {

    pauseStatus = ! pauseStatus
    if ( pauseStatus ) {
        clearInterval( intervalID )
        e.target.textContent = 'resume'
        buttonElements.forEach( button => button.disabled = true )
    } else {
        intervalID = setInterval( increment, 1000 )
        e.target.textContent = 'pause'
        buttonElements.forEach( button => button.disabled = false )
    }
} )


formElement.addEventListener( 'submit', e => {
    e.preventDefault()
    // make a new element
    const p = document.createElement( 'p' )
    // change its properties
    p.textContent = e.target.comment.value
    // append the new element to the DOM
    commentsContainer.append( p )
} )


heartButton.addEventListener( 'click', () => { 
    const currentNum = counterElement.innerText
    //check to see if this element we are making, is already 
    // made and on the DOM
    const foundLi = document.getElementById( `likes-${currentNum}` )
    if( !foundLi ) {
        //create an list item element
        const li = document.createElement( 'li' )
        // put our unique info on the element to find it later
        li.id = `likes-${currentNum}`
        //make a string
        const str = `${currentNum} has been liked <span>1</span> time`
        //put the sting in the element
        li.innerHTML = str
        //put that new element on the DOM!
        likesContainer.append( li )
    } else {
        const newLikes = ++foundLi.querySelector( 'span' ).textContent
        const str = `${currentNum} has been liked <span>${newLikes}</span> times`
        foundLi.innerHTML = str
    }
} )

function increment() {
    counterElement.textContent++
}

plusButton.addEventListener( 'click', increment )

minusButton.addEventListener( 'click', () => {
    const newNumber = counterElement.textContent - 1
    counterElement.textContent = newNumber
} )
