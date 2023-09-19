try {
  // This is the background script for the extension
  chrome.tabs.onUpdated.addListener((tab) => {
    chrome.tabs.get(tab, (currentTabData) => {
      if (currentTabData.url !== "chrome://newTab/") {
        chrome.tabs.sendMessage(tab, {
          message: "message from bg browser action",
          greeting: "hello",
        });
        chrome.scripting.executeScript({
          target: { tabId: currentTabData.id },
          files: ["popup.js"],
        });
      }
    });
  });
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("got responce from Popup.js", request);

    if (request === "Message from popup page") {
      console.log("==================================BG", request);
      sendResponse("Hi");
    }
  });

  // A listener for when the user clicks on the extension button
  //   chrome.action.onClicked.addListener(buttonClicked);
  chrome.action.onClicked.addListener(buttonClicked);
  // Handle that click
  function buttonClicked(tab) {
    // Send a message to the active tab
    console.log("button clicked!", tab.id);
    // Send a message to the tab that is open when button was clicked
    console.log("sending message");
    chrome.tabs.sendMessage(tab.id, {
      message: "message from bg browser action",
      greeting: "hello",
    });
  }
  // Listening for messages
  chrome.runtime.onMessage.addListener(receiver);
  function receiver(request, sender, sendResponse) {
    // console.log("request-01111", request, sender, sendResponse);
    if (request.message === "thank you") {
      // Not doing anything for messages received but I could!
      console.log("GOT IT");
    }
  }
} catch (err) {
  console.log(err);
}
