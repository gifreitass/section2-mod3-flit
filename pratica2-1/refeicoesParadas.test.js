const refeicoesParadas = require('./refeicoesParadas.js')

test('É esperado que 4 adultos e 3 crianças gastem R$1180 em uma viagem com 5 paradas', () => {
    const funcaorefeicoesParadas = refeicoesParadas.valorRefeicoesEmParadas(5, ['adulto', 'criança', 'criança', 'adulto', 'adulto', 'adulto', 'criança'])
    expect(funcaorefeicoesParadas).toBe(1180)
})

test('É esperado que ocorra um erro quando o número de paradas for decimal', () => {
    const funcaorefeicoesParadas = refeicoesParadas.valorRefeicoesEmParadas(5.5, ['adulto', 'criança', 'criança', 'adulto', 'adulto', 'adulto', 'criança'])
    expect(funcaorefeicoesParadas).toBe(1180)
})

test('É esperado que ocorra um erro quando o número de paradas for negativo', () => {
    const funcaorefeicoesParadas = refeicoesParadas.valorRefeicoesEmParadas(-5, ['adulto', 'criança', 'criança', 'adulto', 'adulto', 'adulto', 'criança'])
    expect(funcaorefeicoesParadas).toBe(1180)
})

test('É esperado que ocorra um erro quando houver uma string diferente de adulto ou criança', () => {
    const funcaorefeicoesParadas = refeicoesParadas.valorRefeicoesEmParadas(5, ['menino'])
    expect(funcaorefeicoesParadas).toBe(1180)
})