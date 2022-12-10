function valorRefeicoesEmParadas(numeroParadas, passageiros){
    if (!Number.isInteger(numeroParadas) || numeroParadas < 0){
        return 'ERRO'
    }
    if ((!passageiros.includes('adulto') && !passageiros.includes('criança')) || passageiros.includes(null) || passageiros.includes(undefined)){
        return 'ERRO'
    }
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

valorRefeicoesEmParadas(5, ['adulto', 'criança', 'criança', 'adulto', 'adulto', 'adulto', 'criança'])

module.exports = {
    valorRefeicoesEmParadas
}