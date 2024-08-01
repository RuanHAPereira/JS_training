async function calcularIMC(peso, altura) {
    if (typeof peso !== 'number' || typeof altura !== 'number') {
        return Promise.reject('Os parâmetros devem ser do tipo "number"');
    }

    return  peso / (altura * altura)
}

async function exibirResultadoIMC(peso, altura) {
    try {
        const imc = await calcularIMC(peso, altura);

        console.log(`O IMC calculado é: ${imc}`);

        if (imc < 18.5) {
            console.log('Situação do IMC: magreza');
        } else if (imc >= 18.5 && imc <= 24.9) {
            console.log('Situação do IMC: normal');
        } else if (imc >= 25 && imc <= 29.9) {
            console.log('Situação do IMC: sobrepeso');
        } else if (imc >= 30 && imc <= 39.9) {
            console.log('Situação do IMC: obesidade');
        } else {
            console.log('Situação do IMC: obesidade grave');
        }

        console.log('Fim da execução assíncrona');
    } catch (error) {
        console.error('Erro ao calcular o IMC:', error.message);
    }
}

// Exemplo de uso:
exibirResultadoIMC(75, 1.65);
