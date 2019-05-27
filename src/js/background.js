// Hide comments at first run
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ show: false }, () => {})
})

chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { hostEquals: 'zno.osvita.ua' },
    })
    ],
    actions: [new chrome.declarativeContent.ShowPageAction()]
  }])
})