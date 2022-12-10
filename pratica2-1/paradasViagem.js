function paradasViagem(passageiros, tempoHoras){
    if ((!passageiros.includes('adulto') && !passageiros.includes('criança')) || passageiros.includes(null) || passageiros.includes(undefined)){
        return 'ERRO'
    }
    const tempoHorasAssumido = parseFloat(tempoHoras)
    if (tempoHoras < 0 || Number.isNaN(tempoHorasAssumido)){
        return 'ERRO'
    }
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

module.exports = {
    paradasViagem
}