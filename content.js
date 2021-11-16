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

  let floatDivs = document.querySelectorAll(".index--atom--lmAIo")

  floatDivs.forEach(floatDiv => {
    floatDiv.style.height = "100vh"
    floatDiv.style.width = "100%"
    floatDiv.style.margin = "0"
    floatDiv.style.padding = "0"

    //remove the extra styling class, this one causes all stupid issues bitchy class
    floatDiv.classList.remove('layout--content--3Smmq')
  })
   

    document.querySelector('.index--container--2OwOl').style.margin = '0'
}

function revert() {
  let floatDivs = document.querySelectorAll(".index--atom--lmAIo")
  floatDivs.forEach(floatDiv => { 
    floatDiv.removeAttribute('style')
    floatDiv.classList.add('layout--content--3Smmq')
  })
  document.querySelector('.index--container--2OwOl').style.margin = '25px'
}