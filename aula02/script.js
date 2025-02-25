var v1 = window.prompt("Digite um valor e o programa dirá se é par ou ímpar: ")

if (v1 % 2 == 0) {
    const para = document.createElement("p");
    para.innerText = "O número " ,v1, " é par";
    document.body.appendChild(para);

} else{
    const para = document.createElement("p");
    para.innerText = "O número ", v1, " é impar";
    document.body.appendChild(para);
}

//Ex2

var v2 = window.prompt("Digite um número e o programa verificará se o número é positivo, negativo ou zero:")

if (v2 < 0){

    console.log("O número é negativo")

} else if (v2 == 0){

    console.log("O número é zero")
    
} else {

    console.log("O número é positivo")
}