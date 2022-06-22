file = './bars.txt'

function randomLyric() {
fetch(file).then(response => response.text()).then(data => {
	let lyrics = data.split("\n")
	let num_lyrics = lyrics.length -1;
	
	let lyric_num = Math.floor(Math.random() * num_lyrics)

	let text_line = lyrics[lyric_num]
	let text_line_split = text_line.split('-')

	document.getElementById('lyric').innerText = text_line_split[0]
	document.getElementById('who').innerText = text_line_split[1]
	document.getElementById('song').innerText = text_line_split[2]
})
}
