if (!document.referrer?.match(/zno\.osvita\.ua/g)) {
	window.location.replace(location.href)
}

chrome.storage.onChanged.addListener(changes => {
	const { show } = changes

	if (typeof show?.newValue === 'boolean') {
		act(show.newValue)
	}
})

const showComments = () => {
	const list = document.querySelectorAll('.explanation')

	for (let i = 0; i < list.length; ++i) {
		list[i].style = 'display: static'
	}
}

const hideComments = () => {
	const list = document.querySelectorAll('.explanation')

	for (let i = 0; i < list.length; ++i) {
		list[i].style = 'display: none'
	}
}

const act = a => {
	a ? showComments() : hideComments()
}
