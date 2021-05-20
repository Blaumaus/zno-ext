const defaultCookieParams = {
	domain: 'zno.osvita.ua',
	url: 'https://zno.osvita.ua/',
	expirationDate: 2147483647,
	secure: true,
  sameSite: 'lax',
}

const setCookies = () => {
  chrome.cookies.set({
    ...defaultCookieParams,
    name: 'ost',
    value: 'true',
  })
  
  chrome.cookies.set({
    ...defaultCookieParams,
    name: 'osnow',
    value: 'ok',
  })
  
  chrome.cookies.set({
    ...defaultCookieParams,
    name: 'osname',
    value: 'true',
  })
}

// Hide comments at first run
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ show: false }, () => {})
})

chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { hostEquals: 'zno.osvita.ua' },
    })],
    actions: [new chrome.declarativeContent.ShowPageAction()]
  }])
})

chrome.tabs.onUpdated.addListener(setCookies)
setCookies()
