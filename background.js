function setBadge(text, tabId, color) {
    chrome.browserAction.setBadgeText({
        text: text,
        tabId: tabId
    });
    chrome.browserAction.setBadgeBackgroundColor({
        color: color,
        tabId: tabId
    });
}

chrome.tabs.onUpdated.addListener(function(tabId, opt) {
    chrome.tabs.get(tabId, function(tab) {
        if (tab.url.match(/^http:\/\/orteil\.dashnet\.org\/cookieclicker\/$/)) {
            setBadge('ck', tabId, [0, 0, 255, 255]);
        }
    });
});
