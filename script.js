document.addEventListener('DOMContentLoaded', function() {
    const numerosSorteados = [];
    const sortearBtn = document.getElementById('sortear');
    const reiniciarBtn = document.getElementById('reiniciar');
    const numerosSorteadosTable = document.getElementById('numerosSorteados').getElementsByTagName('tbody')[0];

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
    });

    reiniciarBtn.addEventListener('click', function() {
        reiniciarBingo();
    });

    function adicionarNumeroSorteado(numero) {
        const newRow = numerosSorteadosTable.insertRow();
        const cell = newRow.insertCell();
        cell.appendChild(document.createTextNode(numero));
    }

    function reiniciarBingo() {
        numerosSorteados.length = 0;
        while (numerosSorteadosTable.firstChild) {
            numerosSorteadosTable.removeChild(numerosSorteadosTable.firstChild);
        }
    }
});