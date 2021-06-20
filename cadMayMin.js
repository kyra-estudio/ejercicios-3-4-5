function minMay(){  
    
    const cadena = document.getElementById("cadLetras").value
	const resultado = document.getElementById("resulCad")
    if(cadena==cadena.toUpperCase()){
    resultcadena = 'son mayúsculas';
    }
    else if(cadena==cadena.toLowerCase()){
    resultcadena = 'son minúsculas';
    }
    else{
    resultcadena = 'son mayúsculas y minúsculas';
    }
    resultado.value = resultcadena
   }
   
   
