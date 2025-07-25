import { Invoice } from './invoiceValidator';
import { berechneUmsatzsteuer } from './taxEngine';

export interface GeneratedInvoice extends Invoice {
  brutto: number;
}

export function generateInvoice(
  kunde: string,
  leistung: string,
  netto: number,
  steuersatz: number,
  lieferdatum: string
): GeneratedInvoice {
  const umsatzsteuer = berechneUmsatzsteuer(netto, steuersatz);
  const brutto = +(netto + umsatzsteuer).toFixed(2);
  return { kunde, leistung, betrag: netto, steuersatz, lieferdatum, brutto };
}
