import currencyToNumber from './currencyToNumber';
import stringToDate from './stringToDate';

declare global {
  type TransacaoPagamento = 'Boleto' | 'Cartão de Crédito';
  type TransacaoStatus =
    | 'Paga'
    | 'Recusada pela operadora de cartão'
    | 'Aguardando pagamento'
    | 'Estornada;';

  interface TransacaoAPI {
    Nome: string;
    ID: number;
    Email: string;
    Data: string;
    Status: TransacaoStatus;
    ['Forma de Pagamento']: TransacaoPagamento;
    ['Valor (R$)']: string;
    ['Cliente Novo']: number;
  }
  interface Transacao {
    nome: string;
    id: number;
    email: string;
    data: Date;
    status: TransacaoStatus;
    pagamento: TransacaoPagamento;
    moeda: string;
    valor: number | null;
    clienteNovo: boolean;
  }
}

export default function normalizeTransaction(
  transacao: TransacaoAPI
): Transacao {
  return {
    nome: transacao.Nome,
    id: transacao.ID,
    email: transacao.Email,
    data: stringToDate(transacao.Data),
    status: transacao.Status,
    pagamento: transacao['Forma de Pagamento'],
    moeda: transacao['Valor (R$)'],
    valor: currencyToNumber(transacao['Valor (R$)']),
    clienteNovo: Boolean(transacao['Cliente Novo']),
  };
}
