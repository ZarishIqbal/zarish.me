export const toTitleCase = (text: string, splitBy = ' ') => {
	if (!text) {
		return ''
	}

	return text
		.trim()
		.toLowerCase()
		.split(splitBy)
		.map(s => s.charAt(0).toUpperCase() + s.substring(1))
		.join(splitBy)
}

export default toTitleCase
