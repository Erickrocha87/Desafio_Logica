const prompt = require('prompt-sync')();
let nomeHeroi = "Felipão";
let continua = true
do{
 
    let xpDoHeroi = prompt("Qual é o xp do seu herói? ")
    if(xpDoHeroi < 1000){

        let nivel = "Ferro"
        console.log("O herói" + nomeHeroi +"está no nível " + nivel);
    }else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000){

        nivel = "Bronze"
        console.log("O herói " + nomeHeroi + "está no nível " + nivel);
    }else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000){

        nivel = "Prata"
        console.log("O herói " + nomeHeroi +" está no nível " + nivel);
    }else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000){

        nivel = "Ouro"
        console.log("O herói " + nomeHeroi +" está no nível " + nivel);
    }else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000){

        nivel = "Platina"
        console.log("O herói " + nomeHeroi +" está no nível " + nivel);
    }else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000){

        nivel = "Ascesdente"
        console.log("O herói " + nomeHeroi +" está no nível " + nivel);
    }else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000){

        nivel = "Imortal"
        console.log("O herói " + nomeHeroi +" está no nível " + nivel);
    }else{
        nivel = "Radiante"
        console.log("O herói " + nomeHeroi +" está no nível " + nivel);
    }

let decisao = prompt("Deseja verifica o nível do herói novamente? 1 - Sim / 2 - Não: ");

switch(decisao){
    case "1":
    break;
    continua
    case "2":
    continua = false
    break;
}

}while(continua === true)