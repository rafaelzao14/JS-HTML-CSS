function calculator(){
    let valor1 = parseInt(document.getElementById('val1').value)
    let valor2 = parseInt(document.getElementById('val2').value)
    let sinal = document.getElementById('sinal').value
    let resultado = document.getElementById('resultado')

    if(sinal === "+"){
        resultado.value = valor1 + valor2
    }if(sinal === "-"){
        resultado.value = valor1 - valor2
    }if(sinal === "*"){
        resultado.value = valor1 * valor2
    }if(sinal === "/"){
        resultado.value = valor1 / valor2
    }
}