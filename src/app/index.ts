import 'src/app/components';
import { BaseComponent } from 'src/app/components/base';
import store from 'src/app/store';
import { Action } from 'src/app/store/action';

/**
 * App Component
 */
class AppComponent extends BaseComponent {
  protected connectedCallback() {
    store.subscribe(this.update.bind(this));
    this.update();
  }

  protected addEventListeners() {
    const languageSelect = this.shadowRoot!.querySelector('select') as HTMLSelectElement;
    languageSelect.addEventListener('change', () => store.dispatch(Action.changeLanguage, languageSelect.value));
  }

  protected render(shadowRoot: ShadowRoot) {
    shadowRoot.innerHTML = `<hello-world language="${store.state.language}"></hello-world>
    <select value="${store.state.language}">
      <option value="en">English</option>
      <option value="zh_CN" ${store.state.language === 'zh_CN' ? 'selected' : ''}>Chinese</option>
      <option value="fr" ${store.state.language === 'fr' ? 'selected' : ''}>French</option>
      <option value="ko" ${store.state.language === 'ko' ? 'selected' : ''}>Korean</option>
      <option value="es" ${store.state.language === 'es' ? 'selected' : ''}>Spanish</option>
    </select>`;
  }
}
customElements.define('app-component', AppComponent);
