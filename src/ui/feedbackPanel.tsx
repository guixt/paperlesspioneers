import React from 'react';

interface Props {
  fehler: string[];
}

export const FeedbackPanel: React.FC<Props> = ({ fehler }) => (
  <div>
    <h3>Feedback</h3>
    {fehler.length === 0 ? (
      <p>Alles korrekt!</p>
    ) : (
      <ul>
        {fehler.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
    )}
  </div>
);
