function verificaIMC(imc){
    if(imc < 18.5){
        return "Abaixo do peso"
    }else if(imc >=18.5 && imc < 25) {
        return "Peso normal"
    }else if (imc >= 25 && imc < 30){
        return "Sobrepeso"
    }else if (imc >= 30 && imc < 35){
        return "Obesidade grau 1"
    }else if (imc >= 35 && imc < 40){
        return "Obesidade grau 2"
    }else if (imc >= 40){
        return "Obesidade grau 3"
    }else{
        return "o valor digitado é invalido"
    }
}



function calcular() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

    const valorpeso = Number(peso);
    const valoraltura = Number(altura);

    const imc = valorpeso/valoraltura**2;

    const resultado = verificaIMC(imc);

    const respostaElement = document.getElementById("resposta");
    respostaElement.className = resultado.replace(/ /g, "-");

    if(isNaN(valorpeso)){
        document.getElementById("resposta").innerText = `peso invalido`;
    } else if(isNaN(valoraltura)){
        document.getElementById("resposta").innerText = `altura invalida`;
    } else {
        document.getElementById("resposta").innerText = `Seu IMC é ${imc.toFixed(2)} (${resultado})`;
    }

}
