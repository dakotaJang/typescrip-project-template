import { State } from 'src/app/store/state';
import { World } from 'src/models/World';
import { WorldGeometry } from 'src/models/WorldGeometry';
import { getMass } from '../service';

export type Reducer = (state: State, value?: any) => State | Promise<State>;

export class Action {
  public static changeName: Reducer = (state: State, name: string) => {
    if (name !== state.world.name) {
      const world = new World({...state.world, name });
      const newState = {...state, world };
      newState.language = state.language;
      return newState;
    } else {
      return state;
    }
  }

  public static changeGeometry: Reducer = (state: State, geometry: WorldGeometry) => {
    if (geometry !== state.world.geometry) {
      const world = new World({...state.world, geometry });
      const newState = {...state, world };
      return newState;
    } else {
      return state;
    }
  }

  public static getMass: Reducer = (state: State, name: string) => {
    return getMass(name).then((data) => {
      const world = new World({...state.world, mass: data.mass});
      const newState = {...state, world };
      return newState;
    });
  }

  public static changeLanguage: Reducer = (state: State, language: string) => {
    if (language !== state.language) {
      const newState = {...state, language };
      return newState;
    } else {
      return state;
    }
  }
}
