// test/employee-app.test.js

// ─── STUB NAVIGATION ──────────────────────────────────────────────────────
const locProto = Object.getPrototypeOf(window.location);
Object.defineProperty(locProto, 'hash', {
  configurable: true,
  get() {
    return this.__testHash || '';
  },
  set(v) {
    this.__testHash = v;
  },
});
Object.defineProperty(locProto, 'reload', {
  configurable: true,
  writable: true,
  value: () => {},
});

// ─── IMPORTS ───────────────────────────────────────────────────────────────
import {fixture, expect, html} from '@open-wc/testing';
import '../employee-app.js'; // This will import './store.js' → our mock!

suite('EmployeeApp', () => {
  let el;

  setup(async () => {
    window.location.hash = '';
    el = await fixture(html`<employee-app></employee-app>`);
    await el.updateComplete;
  });

  test('renders the list view by default', () => {
    const list = el.shadowRoot.querySelector('employee-list');
    const form = el.shadowRoot.querySelector('employee-form');
    expect(list).to.exist;
    expect(form).to.be.null;
    expect(el._view).to.equal('list');
  });

  test('navigating to #/add shows the add form', async () => {
    window.location.hash = '#/add';
    window.dispatchEvent(new Event('hashchange'));
    await el.updateComplete;

    expect(el.shadowRoot.querySelector('employee-form')).to.exist;
    expect(el._view).to.equal('add');
  });

  test('navigating to #/edit/:id shows edit form with correct data', async () => {
    // Our mock store has employees[0] with id "1"
    window.location.hash = '#/edit/1';
    window.dispatchEvent(new Event('hashchange'));
    await el.updateComplete;

    const form = el.shadowRoot.querySelector('employee-form');
    expect(form).to.exist;
    expect(el._view).to.equal('edit');
    expect(form.employee).to.deep.include({
      id: '1',
      firstName: 'Alice',
      lastName: 'Smith',
    });
  });
});
