const combustivel = require('./gastoCombustivel.js')

test('É esperado que um carro rodando 25000 metros com gasolina utilize 1.5625L de combustível', () => {
    const funcaoGastoCombustivel = combustivel.gastoCombustivel(25000, 'gasolina')
    expect(funcaoGastoCombustivel).toBe(1.5625)
});

test('É esperado que ocorra um erro quando a distância for um número decimal', () => {
    const funcaoGastoCombustivel = combustivel.gastoCombustivel(2.5, 'gasolina')
    expect(funcaoGastoCombustivel).toBe(1.5625)
});

test('É esperado que ocorra um erro quando a distância for um número negativo', () => {
    const funcaoGastoCombustivel = combustivel.gastoCombustivel(-25000, 'gasolina')
    expect(funcaoGastoCombustivel).toBe(1.5625)
});

test('É esperado que ocorra um erro quando houver alguma string que não seja gasolina ou etanol', () => {
    const funcaoGastoCombustivel = combustivel.gastoCombustivel(25000, 'diesel')
    expect(funcaoGastoCombustivel).toBe(1.5625)
});

''