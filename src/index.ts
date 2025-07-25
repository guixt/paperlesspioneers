import { initGame } from './modules/startGame/initGame';
import { setupWorld } from './modules/startGame/setupWorld';
import { introDialogue } from './modules/startGame/introDialogue';
import { pruefeRechnung } from './core/invoiceValidator';
import { generateInvoice } from './core/invoiceGenerator';
import { ScoringSystem } from './core/scoringSystem';
import { reverseChargeEvent } from './modules/events/reverseCharge';

function main() {
  initGame();
  setupWorld();
  introDialogue();

  const scoring = new ScoringSystem();
  const invoice = generateInvoice('Test GmbH', 'Beratung', 1000, 19, '2024-01-01');
  const fehler = pruefeRechnung(invoice);
  if (fehler.length === 0) {
    scoring.addPunkte(10);
  }
  reverseChargeEvent();
  console.log('Invoice:', invoice);
  console.log('Score:', scoring.score);
  console.log('Fehler:', fehler);
}

main();
