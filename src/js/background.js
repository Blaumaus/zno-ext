// Hide comments at first run
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ show: false }, () => {})
})