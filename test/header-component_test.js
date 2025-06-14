import {fixture, expect, html} from '@open-wc/testing';
import '../header-component.js';

suite('HeaderComponent', () => {
  let el;

  setup(async () => {
    // Clean state
    document.documentElement.lang = 'en';
    localStorage.clear();

    // Create component
    el = await fixture(html`<header-component></header-component>`);
    await el.updateComplete;
  });

  test('renders logo, nav links and language select with correct defaults', () => {
    const logoImg = el.shadowRoot.querySelector('.logo img');
    expect(logoImg, 'logo img should exist').to.exist;
    expect(logoImg.getAttribute('src')).to.equal('/assets/ing_logo.png');
    expect(logoImg.getAttribute('alt')).to.equal('ING Bank Logo');

    const listLink = el.shadowRoot.querySelector('a[href="#/list"]');
    const addLink = el.shadowRoot.querySelector('a[href="#/add"]');
    expect(listLink, 'list link').to.exist;
    expect(addLink, 'add link').to.exist;

    // Default active link is /list
    expect(listLink.classList.contains('active')).to.be.true;
    expect(addLink.classList.contains('active')).to.be.false;

    const select = el.shadowRoot.querySelector('select');
    expect(select, 'language select').to.exist;
    expect(select.value, 'default lang').to.equal('en');
    const opts = Array.from(select.options).map((o) => o.value);
    expect(opts).to.include.members(['tr', 'en']);
  });

  test('hashchange updates active nav link', async () => {
    window.location.hash = '#/add';
    window.dispatchEvent(new Event('hashchange'));
    await el.updateComplete;

    const listLink = el.shadowRoot.querySelector('a[href="#/list"]');
    const addLink = el.shadowRoot.querySelector('a[href="#/add"]');
    expect(addLink.classList.contains('active'), 'add active').to.be.true;
    expect(listLink.classList.contains('active'), 'list inactive').to.be.false;
  });

  test('changing language updates html lang and localStorage', async () => {
    const select = el.shadowRoot.querySelector('select');
    select.value = 'tr';
    select.dispatchEvent(new Event('change', {bubbles: true}));
    await el.updateComplete;

    expect(localStorage.getItem('lang')).to.equal('tr');
    expect(document.documentElement.lang).to.equal('tr');
  });
});
