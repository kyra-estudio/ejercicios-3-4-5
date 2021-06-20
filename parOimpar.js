function parOimpar(){ 
    const numero = +document.getElementById("numberPoI").value
	const resultado = document.getElementById("resultParImpar")
    let result
    let resto = numero % 2 
    if (resto == 0) 
    result = "PAR"
    else 
    result = "IMPAR" 

    resultado.value = result
   }

