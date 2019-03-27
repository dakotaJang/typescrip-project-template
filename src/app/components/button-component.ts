export class ButtonComponent extends HTMLElement {
  /**
   * constructor has no input params
   */
  constructor() {
    super();
  }
  /**
   * connected callback
   */
  private connectedCallback() {
    this.initShadowDom();
  }

  private initShadowDom() {
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `<style>
      button{background:none;padding:12px;border:1px black solid;border-radius:5px;}
    </style>
    <button><slot></slot></button>`;
  }
}
