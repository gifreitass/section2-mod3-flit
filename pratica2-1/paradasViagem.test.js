const paradas = require('./paradasViagem.js')

test('É esperado que um ônibus com 3 adultos e 3 crianças viajando por 5 horas faça 5 paradas', () => {
    const funcaoParadasViagem = paradas.paradasViagem(['adulto', 'adulto', 'criança', 'adulto', 'criança', 'criança'], 5)
    expect(funcaoParadasViagem).toBe(5)
})

test('É esperado que ocorra um erro quando houver uma string diferente de adulto ou criança', () => {
    const funcaoParadasViagem = paradas.paradasViagem(['menina'], 5)
    expect(funcaoParadasViagem).toBe(5)
})

test('É esperado que ocorra um erro quando o tempo em horas for negativo', () => {
    const funcaoParadasViagem = paradas.paradasViagem(['adulto'], -5)
    expect(funcaoParadasViagem).toBe(5)
})

test('É esperado que ocorra um erro quando o tempo em horas não for um float', () => {
    const funcaoParadasViagem = paradas.paradasViagem(['adulto'], 'cinco horas')
    expect(funcaoParadasViagem).toBe(5)
})

