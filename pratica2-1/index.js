function gastoCombustivel(distanciaMetros, combustivel){
    const distanciaKm = distanciaMetros / 1000
    let kmPorLitro = 0

    if(combustivel = 'gasolina'){
        kmPorLitro = 16
    } else if(combustivel = 'etanol'){
        kmPorLitro = 11
    }

    const litrosPercurso = distanciaKm / kmPorLitro

    return litrosPercurso
}

gastoCombustivel(25000, 'gasolina')

 

function paradasViagem(passageiros, tempoHoras){
    const tempoMinutos = tempoHoras * 60
    let tempoParada = 0
    const passageirosAdultos = passageiros.filter(passageiro => passageiro == 'adulto')
    const passageirosCrianças = passageiros.filter(passageiro => passageiro == 'criança')

    if(passageirosAdultos.length > 0 && passageirosCrianças.length === 0){
        tempoParada = 90
    }
    if(passageirosCrianças.length > 0){
        tempoParada = 60
    }
    if(passageirosCrianças.length > passageirosAdultos.length){
        tempoParada = 40
    }

    const numeroParadas = Math.floor(tempoMinutos / tempoParada)

    return numeroParadas
}

paradasViagem(['adulto', 'adulto', 'criança', 'adulto', 'criança', 'criança'], 5)