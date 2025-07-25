import React, { useState } from 'react';
import { StartScreen } from './startScreen';
import { InvoiceForm } from './invoiceForm';
import { FeedbackPanel } from './feedbackPanel';
import { Invoice, pruefeRechnung } from '../core/invoiceValidator';

export const App: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (invoice: Invoice) => {
    setErrors(pruefeRechnung(invoice));
  };

  if (!started) {
    return <StartScreen onStart={() => setStarted(true)} />;
  }

  return (
    <div>
      <InvoiceForm onSubmit={handleSubmit} />
      <FeedbackPanel fehler={errors} />
    </div>
  );
};
