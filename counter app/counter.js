let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
	count = count + 1
	document.getElementById("count-el").innerText = count
}
function save() {
	countStr = count + " - "
	saveEl.textContent += countStr
     
}
function reset() {
    count = 0
	document.getElementById("count-el").innerText = count
}
