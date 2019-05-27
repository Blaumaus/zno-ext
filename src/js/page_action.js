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
    console.log(`Comments are${v ? ' not' : ''} hidden`);
  })
}