const valores = [true, 5, false, "hola", "adios", 2]

//Cadena de texto mayor
function textMax(){
    let cadena1 = valores[3]
    let cadena2 = valores[4]
    let label = document.getElementById("cadenaMayor")
    if (cadena1.length > cadena2.length){
        label.innerHTML = "La cadena de texto mayor es: " + cadena1
    }else if(cadena2.length > cadena1.length)
    {
        label.innerHTML = "La cadena de texto mayor es: " + cadena2
    }else{
        label.innerHTML ="La dos cadenas son iguales"
    }
}

//resultados true y false
function trueAndFalse(){
    let verdadero = valores[0]
    let falso = valores[2]
    let labelTrue = document.getElementById("true")
    let labelFalse = document.getElementById("false")
    labelTrue.innerHTML =(verdadero || falso)
    labelFalse.innerHTML =(verdadero && falso)
}

//operaciones con números
function operaciones(){
    let num1 = valores[1]
    let num2 = valores[5]
    let labelSuma = document.getElementById("suma")
    let labelResta = document.getElementById("resta")
    let labelMult = document.getElementById("mult")
    let labelDiv = document.getElementById("div")
    let labelMod = document.getElementById("mod")

    labelSuma.innerHTML = "suma: " + (num1 + num2)
    labelResta.innerHTML ="resta: " + (num1 - num2)
    labelMult.innerHTML ="multiplicación: " + (num1 * num2)
    labelDiv.innerHTML = "división: " + (num1 / num2)
    labelMod.innerHTML ="módulo: " + (num1 % num2)
}
textMax()
trueAndFalse()
operaciones()