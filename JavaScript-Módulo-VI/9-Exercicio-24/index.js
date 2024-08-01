async function calcularIMC(peso, altura) {
    return new Promise((resolve, reject) => {
        // Verifica se peso e altura são números
        if (typeof peso !== 'number' || typeof altura !== 'number') {
            reject('Os parâmetros devem ser do tipo "number"');
        }

        // Calcula o IMC
        const imc = peso / (altura * altura);

        // Retorna o IMC arredondado para duas casas decimais
        resolve(Number(imc.toFixed(2)));
    });
}

async function exibirResultadoIMC(peso, altura) {
    try {
        // Calcula o IMC chamando a função assíncrona
        const imc = await calcularIMC(peso, altura);

        // Mostra o resultado do IMC no terminal
        console.log(`O IMC calculado é: ${imc}`);

        // Determina a situação do IMC
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

        // Exemplo para evidenciar o funcionamento assíncrono
        console.log('Fim da execução assíncrona');
    } catch (error) {
        console.error('Erro ao calcular o IMC:', error);
    }
}

// Exemplo de uso:
exibirResultadoIMC(75, 1.65); // Peso: 70 kg, Altura: 1.75 m
