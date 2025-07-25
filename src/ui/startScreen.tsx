import React from 'react';

export const StartScreen: React.FC<{onStart: () => void}> = ({ onStart }) => (
  <div>
    <h1>Willkommen bei Invoice Inc.</h1>
    <button onClick={onStart}>Spiel starten</button>
  </div>
);
