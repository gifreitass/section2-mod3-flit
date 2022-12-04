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



function valorRefeicoesEmParadas(numeroParadas, passageiros){
    // Assumindo que a primeira parada é sempre COMPLETA
    // diminui o numero de paradas em 1
    let numeroParadasSubEntendido = numeroParadas - 1;
    let paradasRefCompleta = 1
    // aumenta o numero de refCompleta em 1

    const passageirosAdultos = passageiros.filter(passageiro => passageiro == 'adulto')
    const passageirosCrianças = passageiros.filter(passageiro => passageiro == 'criança')

    const refLeveAdulto = 30
    const refCompletaAdulto = 50
    const refLeveCrianca = 20
    const refCompletaCrianca = 40

    paradasRefCompleta += Math.floor(numeroParadasSubEntendido / 3)
    const paradasRefLeve = numeroParadas - paradasRefCompleta

    // calc ref leve adulto = qtdAdulto * valor
    const valorRefLeveAdulto = passageirosAdultos.length * refLeveAdulto
    const valorRefCompletaAdulto = passageirosAdultos.length * refCompletaAdulto
    const valorRefLeveCrianca = passageirosCrianças.length * refLeveCrianca
    const valorRefCompletaCrianca = passageirosCrianças.length * refCompletaCrianca

    // calculo do valor das refs dos adultos e crianças
    const totalAdultos = valorRefLeveAdulto * paradasRefLeve + valorRefCompletaAdulto * paradasRefCompleta
    const totalCriancas = valorRefLeveCrianca * paradasRefLeve + valorRefCompletaCrianca * paradasRefCompleta

    const valorTotalRefeicoes = totalAdultos + totalCriancas

    return valorTotalRefeicoes
}

const despesasRefeicoes = valorRefeicoesEmParadas(5, ['adulto', 'criança', 'criança', 'adulto', 'adulto', 'adulto', 'criança'])