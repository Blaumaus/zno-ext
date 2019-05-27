chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ show: false }, () => {
    console.log("Comments are not hidden")
  })
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