import { Client } from './createClient';

export function simulateOrder(client: Client) {
  console.log(`${client.name} erteilt einen Auftrag.`);
}
