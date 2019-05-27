window.onload = () => {
	chrome.storage.sync.get('show', (data) => {
		if (data.show) showComments()
		else hideComments()
	})
}

const showComments = () => {
	const l = document.querySelectorAll('.explanation')
	l.forEach(e => e.style.display = 'block')
}

const hideComments = () => {
	const l = document.querySelectorAll('.explanation')
	l.forEach(e => e.style.display = 'none')
}

// message listener for background
chrome.runtime.onMessage.addListener(function (req, sender, res) {
	if (req.command === 'show') showComments()
	else hideComments()

	res({ result: "success" })
})
