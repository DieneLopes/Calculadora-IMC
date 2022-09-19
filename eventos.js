        let imc;
        let peso = 51;
        let altura = 1.58;

        imc =  peso / (altura * altura);
        
        console.log (imc);
        
        if (imc <= 18.5) {
            console.log ('Abaixo do peso');
        }
        if (imc <= 24.9 && imc >= 18.6) {
            console.log ('Peso ideal');
        }
        if (imc <= 25 && imc >= 29.9) {
            console.log ('Sobrepeso');
        }
        if (imc <= 30 && imc >= 34.9) {
            console.log ('Obesidade Grau I');
        }
        if (imc <= 35 && imc >= 39.9){
            console.log ('Obesidade Grau II');
        }
        if (imc >= 40) {
            console.log ('Obesidade Grau III');
        }
