chrome.runtime.sendMessage("Message from popup page", (responce) => {
  console.log("got responce from bg.js----------", responce);
});
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("==================================request", request);
  console.log("==================================sender", sender);
});
chrome.tabs.onUpdated.addListener((tab) => {
  console.log("TAB", tab);
});

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log("==================================");
//   console.log("request-0", request);
//   console.log("sender-0", sender);
//   console.log("sendResponse-0", sendResponse);
//   console.log("==================================");

//   console.log(
//     sender.tab
//       ? "from a content script:" + sender.tab.url
//       : "from the extension"
//   );
//   if (request.greeting === "hello")
//     sendResponse({ message: "thank you", farewell: "goodbye" });
//   return true;
// });
console.log("injected");

// function logMessage(message) {
//   console.log("Message from background:==============> ", message);
// }

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   console.log("Message from background:==============> ", message);
//   logMessage(request.hostname);
// });
