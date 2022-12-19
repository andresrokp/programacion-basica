let player = 0; pc = 0; wins = 0; looses = 0; min = 1; max = 3;

function playerElection(){ return parseInt(prompt("Choose Your Weapon (1, 2 or 3)"))}
function pcElection(min,max){ return Math.floor(Math.random() * (max - min + 1)) + min}

function weapon(num){
    if(num == 1) return "Piedra 🪨";
    else if(num == 2) return "Papel 📄";
    else if(num == 3) return "Tijera ✂️";
    else return "nada! ☠️"
}
function elecciones(pl,pc){
    alert("has elegido " + weapon(pl))
    alert("la PC ha elegido " + weapon(pc))
}
function combate(player, pc){
    if(player == pc) return "empate"
    else if(player == 2 && pc == 1 || player == 3 && pc == 2 || player == 1 && pc == 3)
        return "player"
    else return "pc"
}
function anuncio(res){
    if(res === "empate") alert("Empataron")
    if(res === "player") alert("Ganaste! 🎉")
    if(res === "pc") alert("Perdiste 🤕")
}

function main(){
    while(wins < 3 && looses < 3){
        player = playerElection()
        pc = pcElection(min,max)
        elecciones(player,pc)
        let resultado = combate(player, pc)
        anuncio(resultado);
        if(resultado === "player") wins++
        else if(resultado === "pc") looses++
    }
    if(wins > looses) alert("HAS GANADO !!! 🥳🎉")
    else alert("HAS PERDIDO 😔⚰️")
}

// ejecución
main();