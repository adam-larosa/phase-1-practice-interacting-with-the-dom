

const counterElement = document.querySelector( '#counter' )

const minusElement = document.getElementById( 'minus' )
const plusElement = document.getElementById( 'plus' )
const heartElement = document.getElementById( 'heart' )

const likesContainer = document.querySelector( 'ul.likes' )

heartElement.addEventListener( 'click', () => {
    const currentNumber = counterElement.innerText
    const likeElement = document.getElementById(`likes-${currentNumber}`)

    if ( !likeElement ) {
        const li = document.createElement( 'li' )
        li.id = `likes-${currentNumber}`
        const string = `${currentNumber} has been liked <span>1</span> times`
        li.innerHTML = string
        likesContainer.append( li )
    } else {
        const innerSpanElement = likeElement.querySelector( 'span' )
        const currentLikeNumberAsAString = innerSpanElement.textContent
        const likeNumber = parseInt( currentLikeNumberAsAString )
        innerSpanElement.textContent = likeNumber + 1
    }
} )


minusElement.addEventListener( 'click', () => {
    const theNumberAsAString = counterElement.textContent
    const number = parseInt( theNumberAsAString )
    counterElement.textContent =  number - 1
} )

plusElement.addEventListener( 'click', increment )

function increment() {
    const theNumberAsAString = counterElement.textContent
    const number = parseInt( theNumberAsAString )
    counterElement.textContent =  number + 1
}

const formElement = document.getElementById( 'comment-form' )


const commentsContainer = document.querySelector( 'div.comments' )


formElement.addEventListener( 'submit', e => {
    e.preventDefault()
    const userInput = e.target.comment.value

    const p = document.createElement( 'p' )
    p.innerText = userInput
    commentsContainer.append( p )

    e.target.reset()
} )

const pauseButton = document.getElementById( 'pause' )


let paused = false

let timerID = setInterval( () => {
    increment()
}, 1000)


pauseButton.addEventListener( 'click', () => {
    if ( paused ) {
        timerID = setInterval( () => {
            increment()
        }, 1000)
        const buttons = [minusElement, plusElement, heartElement ]
        buttons.forEach( button => button.disabled = false )
    } else {
        const buttons = [minusElement, plusElement, heartElement ]
        buttons.forEach( button => button.disabled = true )
        clearInterval( timerID )
    }
    paused = !paused
    
} )



// function stopInterval() {
//     clearInterval( timerID )
// }