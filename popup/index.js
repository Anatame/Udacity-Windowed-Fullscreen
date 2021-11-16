const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {toggle: "toggle"})
      });
})

