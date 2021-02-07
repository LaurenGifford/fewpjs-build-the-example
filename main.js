// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorMessage = document.querySelector('#modal')

window.addEventListener('load', hideError)

document.addEventListener('click', function(e) {
  if (e.target.className === 'like-glyph') {
    console.log("heart clicked");
    mimicServerCall()
    .then(response => {
       e.target.className = 'activated-heart'
       e.target.innerText = FULL_HEART
    }
    )
    .catch(error => {
      console.log(error)
      errorMessage.hidden = false
      errorMessage.innerText = `${error}`
      setTimeout(hideError, 5000)
    })
  }
  else if (e.target.className === 'activated-heart') {
    e.target.innerText = EMPTY_HEART
    e.target.className = 'like-glyph'
  }
})


function hideError(){
  errorMessage.hidden = true
}







//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
