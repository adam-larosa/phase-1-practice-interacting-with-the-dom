


const plusElement = document.querySelector( 'button#plus' )
const numberElement = document.getElementById( 'counter' )
const minusElement = document.querySelector( '#minus' )
const heartElement = document.getElementById( 'heart' )
const likesContainer = document.querySelector( 'ul.likes' )
const formElement = document.getElementById( 'comment-form' )
const commentContainer = document.getElementById( 'list' )
const pauseButton = document.getElementById( 'pause' )
const submitButton = document.getElementById( 'submit' )


plusElement.addEventListener( 'click', increment )
minusElement.addEventListener( 'click', decrement )
heartElement.addEventListener( 'click', addLike )
formElement.addEventListener( 'submit', addComment )
pauseButton.addEventListener( 'click', togglePause )

let paused = false

let intervalID = setInterval( increment, 1000 )

function togglePause( e ) {
    paused = !paused
    e.target.textContent = paused ? 'resume' : 'pause'
    const buttons = [
        plusElement, minusElement, heartElement, submitButton
    ]
    buttons.forEach( button => button.disabled = paused ? true : false )
    if( paused === true ) {
        clearInterval( intervalID )
    } else {
        setInterval( increment, 1000 )
    }
}



function addComment( e ) {
    e.preventDefault()
    const p = document.createElement( 'p' )
    p.innerText = e.target.comment.value
    commentContainer.append( p )
    e.target.reset()
}


function addLike() {
    const ourNumber = numberElement.innerText
    const foundLi = document.getElementById( `num-${ourNumber}` )

    if( foundLi ) {
        const likesContainer = foundLi.querySelector( 'span' )

        // an example of the shorthand instead of using parseInt
        ++likesContainer.textContent
        
        // and example of "if/then" shorthand, in this case the "&&" is
        // NOT logical 'and'....  not as readable?  ;) 
        likesContainer.textContent == '2' && foundLi.append( 's' ) 
        
        //       MUCH MORE READABLE!  :)
        // if( likesContainer.textContent == '2' ) {
        //     foundLi.append( 's' ) 
        // }

    } else {
        const li = document.createElement( 'li' )
        li.id = `num-${ourNumber}`
        const theHTML = `${ourNumber} has been liked <span>1</span> time`
        li.innerHTML = theHTML
        likesContainer.append( li )
    }
}


function increment() {
    const theNumber = parseInt( numberElement.innerText )
    numberElement.textContent = theNumber + 1
}

function decrement() {
    const theNumber = parseInt( numberElement.innerText )
    numberElement.textContent = theNumber - 1
}
