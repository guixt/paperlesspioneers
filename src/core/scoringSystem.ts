export class ScoringSystem {
  private punkte = 0;

  addPunkte(p: number) {
    this.punkte += p;
  }

  get score() {
    return this.punkte;
  }
}
