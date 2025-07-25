import React, { useState } from 'react';
import { Invoice } from '../core/invoiceValidator';

interface Props {
  onSubmit: (rechnung: Invoice) => void;
}

export const InvoiceForm: React.FC<Props> = ({ onSubmit }) => {
  const [kunde, setKunde] = useState('');
  const [leistung, setLeistung] = useState('');
  const [betrag, setBetrag] = useState(0);
  const [steuersatz, setSteuersatz] = useState(19);
  const [lieferdatum, setLieferdatum] = useState('');

  return (
    <form onSubmit={e => {e.preventDefault(); onSubmit({kunde, leistung, betrag, steuersatz, lieferdatum});}}>
      <div>
        <label>Kunde</label>
        <input value={kunde} onChange={e => setKunde(e.target.value)} />
      </div>
      <div>
        <label>Leistung</label>
        <input value={leistung} onChange={e => setLeistung(e.target.value)} />
      </div>
      <div>
        <label>Betrag</label>
        <input type="number" value={betrag} onChange={e => setBetrag(+e.target.value)} />
      </div>
      <div>
        <label>Steuersatz</label>
        <select value={steuersatz} onChange={e => setSteuersatz(+e.target.value)}>
          <option value={0}>0%</option>
          <option value={7}>7%</option>
          <option value={19}>19%</option>
        </select>
      </div>
      <div>
        <label>Lieferdatum</label>
        <input type="date" value={lieferdatum} onChange={e => setLieferdatum(e.target.value)} />
      </div>
      <button type="submit">Rechnung einreichen</button>
    </form>
  );
};
