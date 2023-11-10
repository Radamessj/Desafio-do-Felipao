//Desafio do Nível do Herói

let NomeHeroi = "Radamés"
let NivelXp= 8500
let Nivel = ""

if(NivelXp <= 1000){
    Nivel = "Ferro"
}else if(NivelXp <=2000){
    Nivel = "Bronze"
}else if(NivelXp <=5000){
    Nivel = "Prata"
}else if(NivelXp <=6000){
    Nivel = "Ouro"
}else if(NivelXp <=7000){
    Nivel = "Diamante"
}else if(NivelXp <=8000){
    Nivel = "Platina"
}else if(NivelXp <=9000){
    Nivel = "Ascendente"
}else if(NivelXp <=10000){
    Nivel = "Imortal"
}
    console.log("o Herói de nome: " + NomeHeroi + " está no nivel: " + Nivel)
