// 1 - Acesse os dados da api: https://api.origamid.dev/json/transacoes.json
// 2 - Mostre em uma tabela os dados de cada transação.
// 3 - Calcule:
//    • Soma total dos valores
//    • Transações por meio de pagamento.
//    • Transações por status.
//    • Total de vendas por dia da semana.
//    • Dia da semana com mais vendas.
// 4 - Mostre as estatísticas na tela.
// 5 - Organize o código em pequenos módulos.
// 6 - Normalize os dados da API se achar necessário.

import { CountList } from './modules/countBy';
import Statistics from './modules/Statistics';
import fetchData from './modules/fetchData';
import normalizeTransaction from './modules/normalizeTransaction';

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    'https://api.origamid.dev/json/transacoes.json?'
  );
  if (!data) return;
  const transacoes = data.map(normalizeTransaction);
  fillTable(transacoes);
  fillStatistics(transacoes);
}

function fillTable(transacoes: Transacao[]): void {
  transacoes.forEach((transacao) => {
    const tbody = document.querySelector<HTMLElement>('#dados tbody');
    if (tbody) {
      tbody.innerHTML += `
        <tr>
          <th>${transacao.nome}</th>
          <th>${transacao.email}</th>
          <th>${transacao.valor}</th>
          <th>${transacao.pagamento}</th>
          <th>${transacao.status}</th>
        </tr>
      `;
    }
  });
}

function fillList(lista: CountList, containerId: string): void {
  const containerElement = document.getElementById(containerId);
  if (containerElement) {
    Object.keys(lista).forEach((key) => {
      containerElement.innerHTML += `
        <p>${key}: ${lista[key]}</p>
      `;
    });
  }
}

function fillStatistics(transacoes: Transacao[]): void {
  const data = new Statistics(transacoes);

  fillList(data.pagamento, 'pagamento');
  fillList(data.status, 'status');

  const totalElement = document.querySelector<HTMLElement>('#total span');
  if (totalElement) {
    totalElement.innerText = data.total.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  const melhorDiaElement =
    document.querySelector<HTMLElement>('#melhorDia span');
  if (melhorDiaElement) {
    melhorDiaElement.innerText = data.melhorDia[0];
  }
}

handleData();
