function VogalConsoante() { 

     let vogal = [];
    let condicao = false;

    vogal[0] = 'a'; 
    vogal[1] = 'e';
    vogal[2] = 'i';
    vogal[3] = 'o';
    vogal[4] = 'u';

    let letra = prompt("Informe uma letra");

    console.log(letra);

    for(let i = 0; i < 5; i++){
        
        if(letra == vogal[i]) {
            condicao = true;
            break
        }

        condicao = false;
    };

    if(condicao == true) {
        console.log("Vogal");
    } else {
        console.log("Consoante");
    };

};
