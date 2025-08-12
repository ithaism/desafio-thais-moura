// Variáveis
let nomeHeroi = "Artemis";
let xp = 9000;

// Estrutura de decisão
let nivel;

if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata Ouro";
} else if (xp >= 5001 && xp <= 8000) {
    nivel = "Platina Diamante";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else if (xp >= 10001) {
    nivel = "Radiante";
} else {
    nivel = "XP inválido";
}

// Saída
console.log(`O herói ${nomeHeroi} está no nível ${nivel}.`);