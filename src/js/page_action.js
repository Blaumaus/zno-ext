document.addEventListener('DOMContentLoaded', () => {
  const show = document.querySelector('#show')
  const hide = document.querySelector('#hide')

  show.addEventListener('click', () => {
    change(true)
  })

  hide.addEventListener('click', () => {
    change(false)
  })
})

function change(v) {
  chrome.storage.sync.set({ 'show': v }, () => {
    console.log('The value is' + v);
  })

  doAction()
}

function doAction (a) {
  let cmd = a ? 'show' : 'hide'

  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, { command: cmd, show: a }, res => {
      console.log(res)
    })
  })
}