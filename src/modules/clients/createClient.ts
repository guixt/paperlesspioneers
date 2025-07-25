export interface Client {
  name: string;
  land: string;
}

export function createClient(name: string, land: string): Client {
  return { name, land };
}
