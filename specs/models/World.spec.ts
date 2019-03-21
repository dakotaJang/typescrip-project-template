import { World } from '../../src/models/World';
import { WorldGeometry } from '../../src/models/WorldGeometry';

// tslint:disable:object-literal-sort-keys

const suite: any = {
  description: 'A World',
  expectations: {
    /**
     * Default World is Earth defined with round geometry with mass undefined
     * @see #12345
     */
    'initialized with no parameter': () => {
      const world = new World();
      expect(world.name).toBe('Earth');
      expect(world.geometry).toBe(WorldGeometry.round);
      expect(world.mass).toBeUndefined();
    },
    'initialized with parameter: name': () => {
      const name = 'Mars';
      const world = new World({name});
      expect(world.geometry).toBe(WorldGeometry.round);
      expect(world.mass).toBeUndefined();
      expect(world.name).toBe(name);
    },
    'initialized with parameter: mass': () => {
      const mass = 5.972 * Math.pow(10, 24);
      const world = new World({mass});
      expect(world.geometry).toBe(WorldGeometry.round);
      expect(world.mass).toBe(mass);
      expect(world.name).toBe('Earth');
    },
    'initialized with parameter: geometry': () => {
      const geometry = WorldGeometry.flat;
      const world = new World({geometry});
      expect(world.geometry).toBe(geometry);
      expect(world.mass).toBeUndefined();
      expect(world.name).toBe('Earth');
    },
    'initialized with parameters: all': () => {
      const flatland = {
        geometry: WorldGeometry.flat,
        mass: 0,
        name: 'Flatland',
      };
      const world = new World(flatland);
      expect(world.geometry).toBe(flatland.geometry);
      expect(world.mass).toBe(flatland.mass);
      expect(world.name).toBe(flatland.name);
    },
  },
};

describe(suite.description, () => {
  Object.keys(suite.expectations).map((key) => it(key, suite.expectations[key]));
});
