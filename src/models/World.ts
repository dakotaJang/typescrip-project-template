import { WorldGeometry } from './WorldGeometry';

/**
 * World class
 */
export class World {
  /** name of the planet */
  public name: string = 'Earth';
  /** mass in kg */
  public mass: number = NaN;
  /** default geometry will be round */
  public geometry: WorldGeometry = WorldGeometry.round;

  constructor(options?: { name?: string, mass?: number, geometry?: WorldGeometry }) {
    if (options) {
      this.name = options.name ? options.name : this.name;
      this.mass = options.mass || typeof(options.mass) === 'number' ? options.mass : this.mass;
      this.geometry = options.geometry ? options.geometry : this.geometry;
    }
  }
}
