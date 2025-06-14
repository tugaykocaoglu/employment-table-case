import {fixture, expect, html, oneEvent} from '@open-wc/testing';
import '../confirm-dialog.js';

suite('ConfirmDialog', () => {
  let el;

  setup(async () => {
    el = await fixture(html`<confirm-dialog></confirm-dialog>`);
    await el.updateComplete;
  });

  test('default state is closed', () => {
    // Property and attribute should be false/absent
    expect(el.open, 'open property').to.be.false;
    expect(el.hasAttribute('open'), 'open attribute').to.be.false;
  });

  test('opening the dialog reflects attribute and shows message', async () => {
    el.message = 'Are you sure?';
    el.open = true;
    await el.updateComplete;

    // Attribute reflect
    expect(el.hasAttribute('open')).to.be.true;
    // Message rendered inside modal
    const modal = el.shadowRoot.querySelector('.modal');
    expect(modal, 'modal exists').to.exist;
    const text = modal.querySelector('div').textContent.trim();
    expect(text).to.equal('Are you sure?');
  });

  test('clicking confirm button dispatches "confirmed" event and closes', async () => {
    el.open = true;
    await el.updateComplete;

    // Listen for the event
    setTimeout(() => {
      const btn = el.shadowRoot.querySelector('button.confirm');
      btn.click();
    });
    const ev = await oneEvent(el, 'confirmed');
    expect(ev, 'confirmed event').to.exist;
    // After confirming, open should be false and attribute removed
    expect(el.open, 'open after confirm').to.be.false;
    expect(el.hasAttribute('open'), 'attribute after confirm').to.be.false;
  });

  test('clicking cancel button dispatches "cancelled" event and closes', async () => {
    el.open = true;
    await el.updateComplete;

    setTimeout(() => {
      const btn = el.shadowRoot.querySelector('button.cancel');
      btn.click();
    });
    const ev = await oneEvent(el, 'cancelled');
    expect(ev, 'cancelled event').to.exist;
    expect(el.open, 'open after cancel').to.be.false;
    expect(el.hasAttribute('open'), 'attribute after cancel').to.be.false;
  });

  test('clicking overlay dispatches "cancelled" event and closes', async () => {
    el.open = true;
    await el.updateComplete;

    setTimeout(() => {
      const overlay = el.shadowRoot.querySelector('.overlay');
      overlay.click();
    });
    const ev = await oneEvent(el, 'cancelled');
    expect(ev, 'cancelled via overlay').to.exist;
    expect(el.open, 'open after overlay click').to.be.false;
    expect(el.hasAttribute('open'), 'attribute after overlay click').to.be
      .false;
  });
});
