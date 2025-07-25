export function berechneUmsatzsteuer(betrag: number, steuersatz: number): number {
  return +(betrag * steuersatz / 100).toFixed(2);
}
