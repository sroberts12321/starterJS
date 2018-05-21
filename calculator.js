var d1 = document.getElementById("digit1")
var d2 = document.getElementById("digit2")

var add = document.getElementById("add")
var subtract = document.getElementById("subtract")
var multiply = document.getElementById("multiply")
var divide = document.getElementById("divide")
var result = document.getElementById("result")
var clear = document.getElementById("clear")
var operator = ""

var display = document.getElementById("display")

add.addEventListener("click", ()=>{
	operator = ""
	operator = "+"
	console.log("You clicked add")
})

subtract.addEventListener("click", ()=>{
	operator = ""
	operator = "-"
	console.log("You clicked subtract")

})

multiply.addEventListener("click", ()=>{
	operator = ""
	operator = "*"
	console.log("You clicked multiply")

})

divide.addEventListener("click", ()=>{
	operator = ""
	operator = "/"
	console.log("You clicked divide")

})

result.addEventListener("click", ()=>{
	if (operator == "+"){
		display.innerHTML = (Number(d1.value)+Number(d2.value))
		d1.value = ""
		d2.value = ""
	} else if (operator == "-"){
		display.innerHTML = (Number(d1.value)-Number(d2.value))
		d1.value = ""
		d2.value = ""
	} else if (operator == "*"){
		display.innerHTML = (Number(d1.value)*Number(d2.value))
		d1.value = ""
		d2.value = ""
	} else if (operator == "/"){
		display.innerHTML = (Number(d1.value)/Number(d2.value))
		d1.value = ""
		d2.value = ""
	}
	console.log("You clicked equals")
})

clear.addEventListener("click", ()=>{
	console.log("You clicked clear")
	d1.value = ""
	d2.value = ""
})