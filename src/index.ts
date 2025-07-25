import { initGame } from './modules/startGame/initGame';
import { setupWorld } from './modules/startGame/setupWorld';
import { introDialogue } from './modules/startGame/introDialogue';
import { createClient } from './modules/clients/createClient';
import { simulateOrder } from './modules/clients/simulateOrder';
import { pruefeRechnung } from './core/invoiceValidator';
import { generateInvoice } from './core/invoiceGenerator';
import { ScoringSystem } from './core/scoringSystem';
import { reverseChargeEvent } from './modules/events/reverseCharge';
import { taxAudit } from './modules/events/taxAudit';
import { wrongInvoiceChallenge } from './modules/events/wrongInvoiceChallenge';

function main() {
  initGame();
  setupWorld();
  introDialogue();

  const client = createClient('CurioCraft GmbH', 'DE');
  simulateOrder(client);

  const scoring = new ScoringSystem();
  const invoice = generateInvoice(client.name, '3D-Druck Spezialauftrag', 1500, 19, '2024-05-01');
  const fehler = pruefeRechnung(invoice);

  if (fehler.length === 0) {
    scoring.addPunkte(10);
  } else {
    console.log('Fehler gefunden:', fehler);
    wrongInvoiceChallenge();
  }

  reverseChargeEvent();
  taxAudit();

  console.log('Invoice:', invoice);
  console.log('Score:', scoring.score);
}

main();
