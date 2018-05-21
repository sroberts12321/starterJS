var ui = document.getElementById("userinput")
var btnPress = document.getElementById("isPalindrome")
var letters = []
var reversed = []
var h1 = document.getElementById("heading1")

btnPress.addEventListener('click', () => {
	for(let i=0; i<ui.value.length; i++){
		letters.push(ui.value[i])
	}

	for (let i=0; i<letters.length; i++){
		reversed.unshift(letters[i])
	}
if (letters.join() == reversed.join()){
	console.log("It was a palindrome!")
	h1.innerHTML = "It was a palindrome!"

} else {
	console.log("It was NOT a palindrome")
	h1.innerHTML = "It was NOT a palindrome"
}

console.log(letters)
console.log(reversed)

letters=[]
reversed=[]
ui.value=""
})