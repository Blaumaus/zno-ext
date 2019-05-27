window.onload = () => {
	chrome.storage.sync.get('show', (data) => {
		if (data.show) showComments()
		else hideComments()
	})
}

chrome.storage.onChanged.addListener((changes, namespace) => {
	chrome.storage.sync.get('show', (data) => {
		act(data.show)
	})
})

const showComments = () => {
	const l = document.querySelectorAll('.explanation')
	l.forEach(e => e.style.display = 'block')
}

const hideComments = () => {
	const l = document.querySelectorAll('.explanation')
	l.forEach(e => e.style.display = 'none')
}

const act = a => {
	if (a) showComments()
	else hideComments()
}