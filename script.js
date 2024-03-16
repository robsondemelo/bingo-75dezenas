document.addEventListener('DOMContentLoaded', function() {
    const numerosSorteados = [];
    const sortearBtn = document.getElementById('sortear');
    const reiniciarBtn = document.getElementById('reiniciar');
    const numerosSorteadosTable = document.getElementById('numerosSorteados').getElementsByTagName('tbody')[0];
    const numeroAtualDisplay = document.getElementById('numeroAtual');

    sortearBtn.addEventListener('click', function() {
        if (numerosSorteados.length === 75) {
            alert('Todos os números já foram sorteados.');
            return;
        }

        let numeroSorteado;
        do {
            numeroSorteado = Math.floor(Math.random() * 75) + 1;
        } while (numerosSorteados.includes(numeroSorteado));

        numerosSorteados.push(numeroSorteado);
        adicionarNumeroSorteado(numeroSorteado);
        atualizarNumeroAtual(numeroSorteado);

    });

    reiniciarBtn.addEventListener('click', function() {
        reiniciarBingo();
    });

    function adicionarNumeroSorteado(numero) {
        const newRow = numerosSorteadosTable.insertRow();
        const cell = newRow.insertCell();
        cell.appendChild(document.createTextNode(numero));
    }

    function atualizarNumeroAtual(numero) {
        numeroAtualDisplay.textContent = 'Número Atual: ' + numero;
    }

    function reiniciarBingo() {
        numerosSorteados.length = 0;
        numeroAtualDisplay.textContent = '';
        while (numerosSorteadosTable.firstChild) {
            numerosSorteadosTable.removeChild(numerosSorteadosTable.firstChild);
        }
    }
});