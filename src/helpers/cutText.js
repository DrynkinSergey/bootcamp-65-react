export const cutText = text => {
	if (text.length > 200) {
		return `${text.slice(0, 200)}...`
	}
	return text
}
