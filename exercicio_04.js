function OrdenaçãoValores() { 
    let numeros = [];
    for (let i = 0 ; i <4; 1++){
        numeros.push(Number(prompt("Digite um número"))); 
    }
    numeros.sort((a,b) => b - a);
    alert.log("Ordem decresente:" + numeros);
}

