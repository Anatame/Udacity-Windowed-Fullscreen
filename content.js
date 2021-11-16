let isActive = false;

chrome.runtime.onMessage.addListener(
    function(request) {
      if (request.toggle === "toggle")
        if (isActive) {
        revert()
        isActive = !isActive
      } else {
        script()
        isActive = !isActive
      }
    }
);


function script() {

    let floatDiv = document.querySelector(".index--atom--lmAIo")
    floatDiv.style.height = "100vh"
    floatDiv.style.width = "100%"
    floatDiv.style.margin = "0"
    floatDiv.style.padding = "0"

    //remove the extra styling class, this one causes all stupid issues bithy class
    floatDiv.classList.remove('layout--content--3Smmq')

    document.querySelector('.index--container--2OwOl').style.margin = '0'
}

function revert() {
  let floatDiv = document.querySelector(".index--atom--lmAIo")
  document.querySelector('.index--container--2OwOl').style.margin = '25px'
  floatDiv.removeAttribute('style')
  floatDiv.classList.add('layout--content--3Smmq')
}