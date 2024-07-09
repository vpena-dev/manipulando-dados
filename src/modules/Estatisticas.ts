import countBy from './countBy';

type TransacaoValor = Transacao & { valor: number };

function filtrarValor(transacao: Transacao): transacao is TransacaoValor {
  return transacao.valor !== null;
}

export default class Estatisticas {
  private transacoes;
  total;
  pagamento;
  status;
  semana;
  melhorDia;
  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
    this.pagamento = this.setPagamento();
    this.status = this.setStatus();
    this.semana = this.setSemana();
    this.melhorDia = this.setMelhorDia();
  }
  private setTotal() {
    return this.transacoes.filter(filtrarValor).reduce((acc, item) => {
      return acc + item.valor;
    }, 0);
  }
  private setPagamento() {
    return countBy(this.transacoes.map(({ pagamento }) => pagamento));
  }

  private setStatus() {
    return countBy(this.transacoes.map(({ status }) => status));
  }
  private setSemana() {
    let dias = {
      ['Domingo']: 0,
      ['Segunda-feira']: 0,
      ['Terça-feira']: 0,
      ['Quarta-feira']: 0,
      ['Quinta-feira']: 0,
      ['Sexta-feira']: 0,
      ['Sábado']: 0,
    };
    for (let i = 0; i < this.transacoes.length; i++) {
      const dia = this.transacoes[i].data.getDay();
      if (dia === 0) dias['Domingo']++;
      if (dia === 1) dias['Segunda-feira']++;
      if (dia === 2) dias['Terça-feira']++;
      if (dia === 3) dias['Quarta-feira']++;
      if (dia === 4) dias['Quinta-feira']++;
      if (dia === 5) dias['Sexta-feira']++;
      if (dia === 6) dias['Sábado']++;
    }
    return dias;
  }
  private setMelhorDia() {
    return Object.entries(this.semana).sort((a, b) => {
      return b[1] - a[1];
    })[0];
  }
}
