

function factorial () {
	const numero = +document.getElementById("nFactorial").value
	const resultado = document.getElementById("resultFactorial")
	let total = 1; 
	for (i=1; i <= numero; i++) {
		total = total * i; 
	}
	resultado.value =  total; 
}

