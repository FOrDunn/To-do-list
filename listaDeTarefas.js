(() => {const botao = document.querySelector('[data-form-button]');

const PegarInput = (event)=> {
    event.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const paragrafo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = paragrafo;

    const lista = document.querySelector('[data-list]');
    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);

    input.value = " ";
}

botao.addEventListener('click', PegarInput);


const BotaoConclui = (evento) => {
    const BotaoConcluir = document.createElement('button');

        BotaoConcluir.classList.add('check-button');
        BotaoConcluir.textContent = 'Concluir';

        BotaoConcluir.addEventListener('click', ConcluirTarefa)
        return BotaoConcluir;
    }

    const ConcluirTarefa = (evento) => {
        const BotaoConclui = evento.target;

        const TarefaCompleta = BotaoConclui.parentElement;

        TarefaCompleta.classList.toggle('done')
}


const BotaoDeleta = (evento) => {
    const botaoDeleta = document.createElement('button');

        botaoDeleta.textContent = 'deletar';
        botaoDeleta.addEventListener('click', deletarTarefa)
            console.log("deletado");
        
        return botaoDeleta;
    }
const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target;
    const TarefaCompleta = botaoDeleta.parentElement;

    TarefaCompleta.remove();

    return botaoDeleta;
}
})()