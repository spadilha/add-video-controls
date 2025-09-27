chrome.action.onClicked.addListener((tab) => {
    // Inject the content.js script into the active tab when the addon icon is clicked
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  });
