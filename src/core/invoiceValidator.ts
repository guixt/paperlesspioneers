export interface Invoice {
  kunde: string;
  leistung: string;
  betrag: number;
  steuersatz: number;
  lieferdatum: string;
}

export function pruefeRechnung(rechnung: Invoice): string[] {
  const fehler: string[] = [];
  if (!rechnung.kunde) fehler.push('Kunde fehlt');
  if (!rechnung.lieferdatum) fehler.push('Lieferdatum fehlt');
  if (rechnung.steuersatz !== 0 && rechnung.steuersatz !== 7 && rechnung.steuersatz !== 19) {
    fehler.push('Unbekannter Steuersatz');
  }
  return fehler;
}
