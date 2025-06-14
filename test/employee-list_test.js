// at the very top of test/header-component.test.js
// (or your confirm-dialog test, employee-list test, etc.)
const locProto = Object.getPrototypeOf(window.location);
Object.defineProperty(locProto, 'hash', {
  configurable: true,
  get() {
    return this.__testHash || '';
  },
  set(val) {
    // swallow all hash‐writes during tests
    this.__testHash = val;
  },
});

// also, if you ever call reload(), stub it too:
Object.defineProperty(locProto, 'reload', {
  configurable: true,
  writable: true,
  value: () => {
    /* no-op */
  },
});

import {fixture, expect, html, oneEvent} from '@open-wc/testing';
import '../employee-list.js';

suite('EmployeeList', () => {
  // 6 adet örnek çalışan, pageSize=5 ile paginate edelim
  const employees = Array.from({length: 6}, (_, i) => ({
    id: `${i + 1}`,
    firstName: `First${i + 1}`,
    lastName: `Last${i + 1}`,
    email: `user${i + 1}@example.com`,
    phone: `123456789${i + 1}`,
    department: 'Tech',
    position: 'Junior',
    employmentDate: `2020-01-0${i + 1}`,
    birthDate: `1990-01-0${i + 1}`,
  }));

  let el;
  setup(async () => {
    el = await fixture(html`
      <employee-list .employees=${employees} .pageSize=${5}></employee-list>
    `);
    await el.updateComplete;
  });

  test('renders search input, add & bulk-delete buttons (bulk-delete disabled)', () => {
    const search = el.shadowRoot.querySelector('input[type="text"]');
    expect(search, 'search input').to.exist;

    const btns = Array.from(el.shadowRoot.querySelectorAll('button'));
    const addBtn = btns.find((b) => b.textContent.trim() === 'Add Employee');
    const delBtn = btns.find((b) => b.textContent.trim() === 'Delete Selected');

    expect(addBtn, 'add button').to.exist;
    expect(delBtn, 'bulk-delete button').to.exist;
    expect(delBtn.disabled, 'bulk-delete disabled').to.be.true;
  });

  test('table view has correct headers and pageSize rows', () => {
    const table = el.shadowRoot.querySelector('table');
    expect(table, 'table exists').to.exist;

    const headers = Array.from(table.querySelectorAll('th')).map((th) =>
      th.textContent.trim()
    );

    expect(headers).to.include.members([
      '', // checkbox kolonu
      'First Name',
      'Last Name',
      'Date of Employment',
      'Date of Birth',
      'Phone Number',
      'Email Address',
      'Department',
      'Position',
      'Save',
    ]);

    // Satır sayısı pageSize kadar (5)
    const rows = table.querySelectorAll('tbody tr');
    expect(rows.length, 'row count').to.equal(5);
  });

  test('pagination prev/next & active page behavior', async () => {
    const btns = el.shadowRoot.querySelectorAll('.pagination button');
    const [prev, p1, p2, next] = btns;
    expect(prev.disabled, 'prev disabled on page1').to.be.true;
    expect(p1.classList.contains('active'), 'page1 active').to.be.true;
    expect(next.disabled, 'next enabled').to.be.false;

    next.click();
    await el.updateComplete;
    expect(p2.classList.contains('active'), 'page2 active').to.be.true;
    expect(prev.disabled, 'prev now enabled').to.be.false;
    expect(next.disabled, 'next now disabled').to.be.true;
  });

  test('row selection emits selection-change & enables bulk-delete', async () => {
    const cb = el.shadowRoot.querySelector('tbody tr input[type="checkbox"]');
    setTimeout(() => cb.click());
    const ev = await oneEvent(el, 'selection-change');
    expect(ev.detail).to.deep.equal([employees[0].id]);

    const delBtn = Array.from(el.shadowRoot.querySelectorAll('button')).find(
      (b) => b.textContent.trim() === 'Delete Selected'
    );
    expect(delBtn.disabled).to.be.false;
  });

  test('header checkbox toggles all on/off', async () => {
    const headerCb = el.shadowRoot.querySelector(
      'thead input[type="checkbox"]'
    );
    setTimeout(() => headerCb.click());
    let ev = await oneEvent(el, 'selection-change');
    expect(ev.detail).to.deep.equal(employees.slice(0, 5).map((e) => e.id));

    setTimeout(() => headerCb.click());
    ev = await oneEvent(el, 'selection-change');
    expect(ev.detail).to.deep.equal([]);
  });

  test('list view toggle works', async () => {
    const listBtn = Array.from(
      el.shadowRoot.querySelectorAll('.view button')
    ).find((b) => b.textContent.trim() === 'List');
    listBtn.click();
    await el.updateComplete;

    expect(el.viewType).to.equal('list');
    expect(el.shadowRoot.querySelector('table')).to.be.null;
    expect(el.shadowRoot.querySelector('.list')).to.exist;
  });

  test('search filters results and resets to page 1', async () => {
    const input = el.shadowRoot.querySelector('input[type="text"]');
    input.value = 'First1';
    input.dispatchEvent(new Event('input', {bubbles: true}));
    await el.updateComplete;

    expect(el.filtered.length).to.equal(1);
    expect(el.paged.length).to.equal(1);
    expect(el.currentPage).to.equal(1);
  });
});
