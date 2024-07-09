/**
 * String '1.200,50' to Number 1200.50
 *
 */
export default function currencyToNumber(moeda: string): number | null {
  const numero = Number(moeda.replaceAll('.', '').replace(',', '.'));
  return isNaN(numero) ? null : numero;
}
