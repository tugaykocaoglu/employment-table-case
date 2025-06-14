import {LitElement, html, css} from 'lit';
import {t} from './i18n.js';

export class HeaderComponent extends LitElement {
  static properties = {route: {type: String}};
  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      background: #fff;
    }

    .titleWrapper {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      color: black;
    }

    h5 {
      margin: 0;
    }

    nav a {
      color: rgba(255, 102, 0, 0.53);
      margin-right: 1rem;
    }

    .active {
      color: #ff6600;
    }

    .logo {
      display: flex;
      align-items: center;
    }
    .logo img {
      max-height: 40px;
      object-fit: contain;
    }
  `;
  constructor() {
    super();
    this.route = window.location.hash || '#/list';
    window.addEventListener('hashchange', () => {
      this.route = window.location.hash;
    });
  }

  _onLangChange(e) {
    const newLang = e.target.value;
    localStorage.setItem('lang', newLang);
    document.documentElement.lang = newLang;
    // sayfayı yeniden yükleyerek i18n.js'in lang değişkeni güncellesin
    window.location.reload();
  }
  render() {
    const currentLang = document.documentElement.lang || 'en';
    return html`
      <header>
        <a href="/" class="titleWrapper">
          <div class="logo">
            <img src="/assets/ing_logo.png" alt="ING Bank Logo" />
          </div>
          <h5 class="title">ING</h5>
        </a>
        <nav>
          <a
            href="#/list"
            class=${this.route.startsWith('#/list') ? 'active' : ''}
          >
            ${t('employees')}
          </a>
          <a href="#/add" class=${this.route === '#/add' ? 'active' : ''}>
            ${t('addNew')}
          </a>
          <select @change=${this._onLangChange} .value=${currentLang}>
            <option value="tr">TR</option>
            <option value="en">EN</option>
          </select>
        </nav>
      </header>
    `;
  }
}
customElements.define('header-component', HeaderComponent);
