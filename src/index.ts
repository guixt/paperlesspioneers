import { initGame } from './modules/startGame/initGame';
import { setupWorld } from './modules/startGame/setupWorld';
import { introDialogue } from './modules/startGame/introDialogue';
import { pruefeRechnung } from './core/invoiceValidator';
import { ScoringSystem } from './core/scoringSystem';

function main() {
  initGame();
  setupWorld();
  introDialogue();

  const scoring = new ScoringSystem();
  const fakeInvoice = { kunde: 'Test GmbH', leistung: 'Beratung', betrag: 1000, steuersatz: 19, lieferdatum: '2024-01-01' };
  const fehler = pruefeRechnung(fakeInvoice);
  if (fehler.length === 0) scoring.addPunkte(10);
  console.log('Score:', scoring.score);
  console.log('Fehler:', fehler);
}

main();
