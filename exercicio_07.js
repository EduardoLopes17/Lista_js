function Picoleteria() { 
    const picoles = [
        {codigo: "A", sabor: "Chocolate",Preco: 1.50},
        {codigo: "B", sabor: "Morango",Preco: 2.50},
        {codigo: "C", sabor: "Creme",Preco: 2.50},
        {codigo: "D", sabor: "Manga",Preco: 3.20},
        {codigo: "E", sabor: "Melancia",Preco: 3.40},
        {codigo: "F", sabor: "Vanília Azul",Preco: 3.00},
        {codigo: "G", sabor: "Céu Azul",Preco: 3.60},
        {codígo: "H", sabor: "Brownie",Preco: 4.00},
        {codigo: "I", sabor: "Hawaiano",Preco: 5.00},
    ];
    let codigoPicole = prompt   ("Digite o código para consulta ( A, B, C, D, E, F, G, H, I)");
    let picole = picoles.find(picole => picole.codigo == codigoPicole);
    if (picoles) {
        alert("Dados do Picole: \nSabor: " + picole.sabor + "\nPreço:" + picole.Preco);
    } else{
        alert("Digite um codígo para consultar.");
    }

}