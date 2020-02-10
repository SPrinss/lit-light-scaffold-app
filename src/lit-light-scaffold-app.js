import { LitElementLight, html} from 'lit-element-light';
import { LLButton, LLPage, LLAccordion, LLIcon } from 'lit-light-components';

/**
 * @customElement
 */
class LitLightScaffoldApp extends LitElementLight {
 
  static get properties() {
    return {
      message: {type: String}
    }
  }

  constructor() {
    super();
    this.message = 'Hello! Have a look at some of the elements. All are styled by --ll-theme custom css variables in the index.html'
  }

  get template() {
    return html`
      <style>
        ll-page {
          max-width: 500px;
          padding: 20px;
          margin: auto;
        }
        ll-page * {
          margin-bottom: 14px;
        }
      </style>

      <ll-page>
        <header slot="header">
          ${this.message}
          <ll-progress-bar></ll-progress-bar>
        </header>

        <ll-accordion slot="body">
          <article data-accname="Option one">Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue.</article>
          <article data-accname="Option two">Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue.</article>
          <article data-accname="Option three">Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue.</article>
        </ll-accordion>

        <ll-icon slot="body" icon="arrow-left"></ll-icon>
        <ll-button slot="body" label="Click me"></ll-button>

      </ll-page>

    `
  };


}
window.customElements.define('lit-light-scaffold-app', LitLightScaffoldApp);
