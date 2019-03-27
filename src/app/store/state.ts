import { World } from 'src/models/World';
export class State {
  /**
   * state of the world
   */
  public world: World;

  /**
   * current state of language
   */
  public language: string = 'en';

  /**
   * Construct state with new World
   */
  constructor(world = new World()) {
    this.world = world;
  }
}
