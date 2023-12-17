let saldoDeRankeadas = derrotaseVitorias(0, 101); //o primeiro parâmetro é derrota o segundo, vitória 
let nivelJogador = nivel(saldoDeRankeadas)

console.log("O Herói tem de saldo " + saldoDeRankeadas + " e está no nível de " + nivelJogador)

function derrotaseVitorias(derrotas, vitorias){
    saldo = vitorias - derrotas
    return saldo
}

function nivel(xpDoHeroi){
    let nivelDoHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]
    let Ferro = 10
    let Bronze = [11, 20]
    let Prata = [21, 50]
    let Ouro = [51, 80]
    let Diamante = [81, 90]
    let Lendario = [91, 100]

    if(xpDoHeroi <= Ferro){
        Rhoney = nivelDoHeroi[0]
    }else if((xpDoHeroi >= Bronze[0]) && (xpDoHeroi <= Bronze[1])){
        Rhoney = nivelDoHeroi[1]
    }else if((xpDoHeroi >= Prata[0]) && (xpDoHeroi <= Prata[1])){
        Rhoney = nivelDoHeroi[2]
    }else if((xpDoHeroi >= Ouro[0]) && (xpDoHeroi <= Ouro[1])){
        Rhoney = nivelDoHeroi[3]
    }else if((xpDoHeroi >= Diamante[0]) && (xpDoHeroi <= Diamante[1])){
        Rhoney = nivelDoHeroi[4]
    }else if((xpDoHeroi >= Lendario[0]) && (xpDoHeroi <= Lendario[1])){
        Rhoney = nivelDoHeroi[5]
    }else{
        Rhoney = nivelDoHeroi[6]
         }   
         return Rhoney
        }

