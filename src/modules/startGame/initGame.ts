import { GameEngine } from '../../core/gameEngine';

export function initGame(): GameEngine {
  const engine = new GameEngine();
  engine.start();
  return engine;
}
