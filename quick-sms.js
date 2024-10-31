
function maxChars(textArea, countDiv, maxTotal) {
	if (textArea.value.length > maxTotal) {
		textArea.value = textArea.value.substring(0, maxTotal);
	} else {
		countDiv.innerHTML = maxTotal - textArea.value.length;
	}
}
