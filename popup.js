document.getElementById("add-controls").addEventListener("click", function() {
    // Envia a solicitação para injetar o script de conteúdo na aba ativa
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ['content.js']
        });
    });
});
