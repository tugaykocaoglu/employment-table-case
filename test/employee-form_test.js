import {fixture, assert, expect, oneEvent} from '@open-wc/testing';

import {html} from 'lit/static-html.js';
import {EmployeeForm} from '../employee-form.js';

suite('EmployeeForm', () => {
  test('is defined', () => {
    const el = document.createElement('employee-form');
    assert.instanceOf(el, EmployeeForm);
  });

  test('should render all input fields and buttons', async () => {
    const el = await fixture(html`<employee-form></employee-form>`);
    const inputs = el.shadowRoot.querySelectorAll('input, select');
    expect(inputs).to.have.lengthOf(
      8,
      'firstName, lastName, employmentDate, birthDate, phone, email, department, position'
    );
    const saveBtn = el.shadowRoot.querySelector('button.save');
    const cancelBtn = el.shadowRoot.querySelector('button.cancel');
    expect(saveBtn).to.exist;
    expect(cancelBtn).to.exist;
  });

  test('should show required field errors when submitting empty form', async () => {
    const el = await fixture(html`<employee-form></employee-form>`);
    // Tıklayarak submit tetikle
    el.shadowRoot.querySelector('button.save').click();
    await el.updateComplete;
    const errorDivs = el.shadowRoot.querySelectorAll('.error');
    expect(errorDivs.length).to.equal(
      8,
      'Tüm zorunlu alanlar için hata mesajı gösterilmeli'
    );
  });

  test('should validate phone pattern and email format', async () => {
    const el = await fixture(html`<employee-form></employee-form>`);
    const phoneInput = el.shadowRoot.querySelector('input[name="phone"]');
    const emailInput = el.shadowRoot.querySelector('input[name="email"]');

    phoneInput.value = '123';
    phoneInput.dispatchEvent(new Event('input', {bubbles: true}));
    emailInput.value = 'not-an-email';
    emailInput.dispatchEvent(new Event('input', {bubbles: true}));

    el.shadowRoot.querySelector('button.save').click();
    await el.updateComplete;

    // Tüm hata mesajlarını topla ve içeriklerinde "phone" veya "email" geçen bir öğe ara
    const errors = Array.from(el.shadowRoot.querySelectorAll('.error')).map(
      (e) => e.textContent
    );
    const hasPhoneError = errors.some((text) => /phone/i.test(text));
    const hasEmailError = errors.some((text) => /email/i.test(text));
    expect(
      hasPhoneError,
      `Beklenen telefon hatası bulunamadı. Hatalar: ${errors}`
    ).to.be.true;
    expect(
      hasEmailError,
      `Beklenen e-posta hatası bulunamadı. Hatalar: ${errors}`
    ).to.be.true;
  });

  test('should validate birthDate < employmentDate', async () => {
    const el = await fixture(html`<employee-form></employee-form>`);
    const birthInput = el.shadowRoot.querySelector('input[name="birthDate"]');
    const empInput = el.shadowRoot.querySelector(
      'input[name="employmentDate"]'
    );

    // birthDate sonrasını employmentDate olarak verelim
    birthInput.value = '2000-01-01';
    birthInput.dispatchEvent(new Event('input', {bubbles: true}));
    empInput.value = '1990-01-01';
    empInput.dispatchEvent(new Event('input', {bubbles: true}));

    el.shadowRoot.querySelector('button.save').click();
    await el.updateComplete;

    const errors = Array.from(el.shadowRoot.querySelectorAll('.error')).map(
      (e) => e.textContent
    );
    // Tarih karşılaştırma hatası mesajındaki anahtar kelimeyi kontrol edelim
    const hasDateError = errors.some(
      (text) => /birth/i.test(text) || /date/i.test(text)
    );
    expect(
      hasDateError,
      `Beklenen doğum tarihi validasyon hatası bulunamadı. Hatalar: ${errors}`
    ).to.be.true;
  });

  test('should dispatch `cancel` event when cancel button is clicked', async () => {
    const el = await fixture(html`<employee-form></employee-form>`);
    setTimeout(() => el.shadowRoot.querySelector('button.cancel').click());
    const ev = await oneEvent(el, 'cancel');
    expect(ev).to.be.ok;
  });

  test('should dispatch `save` event with detail on valid submission', async () => {
    const el = await fixture(html`<employee-form></employee-form>`);
    const data = {
      firstName: 'John',
      lastName: 'Doe',
      employmentDate: '2020-01-01',
      birthDate: '1990-01-01',
      phone: '5551234567',
      email: 'john.doe@example.com',
      department: 'Tech',
      position: 'Senior',
    };

    // Alanları doldur
    for (const [name, value] of Object.entries(data)) {
      const fld = el.shadowRoot.querySelector(`[name="${name}"]`);
      fld.value = value;
      fld.dispatchEvent(
        new Event(fld.tagName === 'SELECT' ? 'change' : 'input', {
          bubbles: true,
        })
      );
    }

    // click ve event yakalama
    setTimeout(() => el.shadowRoot.querySelector('button.save').click());
    const ev = await oneEvent(el, 'save');

    expect(ev).to.exist;
    // detail içindeki veriler doğru
    expect(ev.detail).to.include(data);
    // 'id' property'sinin tanımlı (null/undefined değil) olduğunu kontrol et
    expect(ev.detail).to.have.property('id').that.is.not.undefined;
  });
});
