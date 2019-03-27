export abstract class BaseComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  protected static get observedAttributes(): string[] {
    return [];
  }

  /**
   * Invoked each time the custom element is appended into a document-connected element
   */
  protected abstract connectedCallback(): void;

  /**
   * Define all addEventListener functions
   */
  protected abstract addEventListeners(): void;

  /**
   * Render component
   */
  protected abstract render(shadowRoot: ShadowRoot): void;

  protected attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    /*
    switch (name) {
      case 'attributeName':

        break;
      default:
        break;
    }
    */
  }

  /**
   * Render the component and add event listeners in the newly rendered elements
   */
  protected update() {
    this.render!(this.shadowRoot!);
    this.addEventListeners!();
  }
}
