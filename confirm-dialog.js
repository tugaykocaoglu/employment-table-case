import {LitElement, html, css} from 'lit';
import {t} from './i18n.js';

export class ConfirmDialog extends LitElement {
  static properties = {
    open: {type: Boolean, reflect: true},
    message: {type: String},
  };

  static styles = css`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: block;
      visibility: hidden;
    }
    :host([open]) {
      visibility: visible;
    }
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .modal {
      background: #fff;
      padding: 24px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      max-width: 90%;
      width: 400px;
    }
    .footer {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 24px;
      text-align: center;
    }
    button {
      margin-left: 8px;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      width: 100%;
    }
    button.cancel {
      background: #f0f0f0;
      color: #000;
    }
    button.confirm {
      background: #ff6600;
      color: #fff;
    }
  `;

  constructor() {
    super();
    this.open = false;
    this.message = '';
  }

  render() {
    return html`
      <div class="overlay" @click=${this._cancel}>
        <div class="modal" @click=${(e) => e.stopPropagation()}>
          <div>${this.message}</div>
          <div class="footer">
            <button class="confirm" @click=${this._confirm}>
              ${t('save')}
            </button>
            <button class="cancel" @click=${this._cancel}>
              ${t('cancel')}
            </button>
          </div>
        </div>
      </div>
    `;
  }

  _confirm() {
    this.open = false;
    this.dispatchEvent(
      new CustomEvent('confirmed', {bubbles: true, composed: true})
    );
  }
  _cancel() {
    this.open = false;
    this.dispatchEvent(
      new CustomEvent('cancelled', {bubbles: true, composed: true})
    );
  }
}
customElements.define('confirm-dialog', ConfirmDialog);
