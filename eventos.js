function calculadoraIMC() {
  
    let altura = document.innerHTML ('altura').value;  
    let peso = document.innerHTML ('peso').value;
  
    let resultado = document.innerHTML ('resultado').value;
    
    let imc = (peso.value / (altura.value * altura.value));
  
    
    if (imc >= 19 && imc < 24) { 
        console.log('peso ideal')
    
    } else if (imc >= 25 && imc < 29) {
        console.log('Sobrepeso')
    
    } else if (imc >= 30 && imc < 34) {
        console.log('Obesidade Grau I')
    
    } else if (imc >= 35 && imc <= 39) {
        console.log('Obesidade Grau II')
    
    } else if (imc >= 40) {
        console.log('Obesidade Grau III')
    }

    resultado.innerHTML = `IMC: ${imc}`;    

}



