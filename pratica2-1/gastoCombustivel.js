function gastoCombustivel(distanciaMetros, combustivel){
    if (!Number.isInteger(distanciaMetros) || distanciaMetros < 0){
        return 'ERRO'
    }
    if (combustivel !== 'gasolina' && combustivel !== 'etanol'){
        return 'ERRO'
    }
    const distanciaKm = distanciaMetros / 1000
    let kmPorLitro = 0

    if(combustivel == 'gasolina'){
        kmPorLitro = 16
    } else if(combustivel == 'etanol'){
        kmPorLitro = 11
    }

    const litrosPercurso = distanciaKm / kmPorLitro

    return litrosPercurso
}

gastoCombustivel(25000, 'gasolina')
console.log(gastoCombustivel(25000, 'gasolina'))

module.exports = {
    gastoCombustivel
}