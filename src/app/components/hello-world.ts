import { BaseComponent } from 'src/app/components/base';
import store from 'src/app/store';
import { Action } from 'src/app/store/action';
import { WorldGeometry } from 'src/models/WorldGeometry';
import dictionary from './dictionary';

export class HelloWorldComponent extends BaseComponent {
  private unsubscribe: any;

  protected static get observedAttributes(): string[] {
    return ['language'];
  }

  protected attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case 'language':
        if (oldValue === newValue) { return; }
        this.update();
        break;
      default:
        break;
    }
  }

  protected connectedCallback() {
    this.unsubscribe = store.subscribe(this.update.bind(this));
    this.update();
  }
  protected disconnectedCallback() {
    this.unsubscribe();
  }

  protected addEventListeners() {
    const nameInput = this.shadowRoot!.querySelector('#name') as HTMLInputElement;
    const toggleGeometryButton = this.shadowRoot!.querySelector('#toggle-geometry') as HTMLButtonElement;
    const getMassButton = this.shadowRoot!.querySelector('#get-mass') as HTMLButtonElement;
    nameInput.addEventListener('change', () => {
      store.dispatch(Action.changeName, nameInput.value)
        .then(() => store.dispatch(Action.getMass, nameInput.value));
    });
    toggleGeometryButton.addEventListener(
      'click',
      () => store.dispatch(Action.changeGeometry, this.toggleGeometry()),
    );
    getMassButton.addEventListener(
      'click',
      () => store.dispatch(Action.getMass, store.state.world.name),
    );
  }

  protected render(shadowRoot: ShadowRoot): void {
    const state = store.state;
    shadowRoot.innerHTML = `<h1>Hello World</h1><div>Name: ${state.world.name}</div>
      <div>Geometry: ${WorldGeometry[state.world.geometry]}</div>
      <div>Mass: ${Number.isNaN(state.world.mass) ? undefined : `${state.world.mass} kg`}</div>
      <div><input id="name" placeholder="${dictionary[state.language].ENTER_NAME}"></div>
      <div><button-component id="toggle-geometry">${dictionary[state.language].TOGGLE_GEOMETRY}</button-component></div>
      <div><button-component id="get-mass">Get Mass</button-component></div>`;
  }

  /**
   * Toggle WorldGeometry between flat and round
   */
  private toggleGeometry() {
    return store.state.world.geometry !== WorldGeometry.flat ? WorldGeometry.flat : WorldGeometry.round;
  }
}
