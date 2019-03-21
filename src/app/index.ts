import { World } from '../models/World';
import { WorldGeometry } from '../models/WorldGeometry';

/**
 * App Component
 */
class AppComponent extends HTMLElement {
  private world: World;

  /**
   * constructor has no input params
   */
  constructor() {
    super();
  }
  /**
   * init world
   */
  public initWorld() {
    this.world = new World();
    return 'hello world';
  }
  /**
   * connected callback
   */
  private connectedCallback() {
    this.initWorld();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `<h1>Hello World</h1><div>Name: ${
      this.world.name}</div><div>Geometry: ${WorldGeometry[this.world.geometry]}</div>`;
  }
}
customElements.define('app-component', AppComponent);
