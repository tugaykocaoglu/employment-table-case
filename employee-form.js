import {LitElement, html, css} from 'lit';
import {t} from './i18n.js';

export class EmployeeForm extends LitElement {
  static properties = {
    employee: {type: Object},
    errors: {type: Object},
  };

  constructor() {
    super();
    this.employee = null;
    this.errors = {};
  }

  static styles = css`
    .formLayout {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    form {
      width: 80%;
      background: #fff;
      padding: 24px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    label {
      display: block;
      margin-top: 12px;
      font-weight: 500;
    }
    input,
    select {
      width: 100%;
      padding: 8px;
      margin-top: 4px;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
    }
    .error {
      color: #ff4d4f;
      font-size: 12px;
      margin-top: 4px;
    }
    .actions {
      margin-top: 24px;
      display: flex;
      gap: 12px;
    }
    button {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button.save {
      background: #ff6600;
      color: #fff;
    }
    button.cancel {
      background: #f0f0f0;
      color: #000;
    }
  `;

  render() {
    const emp = this.employee || {};
    return html`
      <div class="formLayout">
        <form @submit=${this._onSubmit} novalidate>
          <label>
            ${t('firstName')}
            <input
              name="firstName"
              .value=${emp.firstName || ''}
              @input=${() => this._clearError('firstName')}
              required
            />
            ${this.errors.firstName
              ? html`<div class="error">${this.errors.firstName}</div>`
              : ''}
          </label>

          <label>
            ${t('lastName')}
            <input
              name="lastName"
              .value=${emp.lastName || ''}
              @input=${() => this._clearError('lastName')}
              required
            />
            ${this.errors.lastName
              ? html`<div class="error">${this.errors.lastName}</div>`
              : ''}
          </label>

          <label>
            ${t('dateOfEmployment')}
            <input
              type="date"
              name="employmentDate"
              .value=${emp.employmentDate || ''}
              @input=${() => this._clearError('employmentDate')}
              required
            />
            ${this.errors.employmentDate
              ? html`<div class="error">${this.errors.employmentDate}</div>`
              : ''}
          </label>

          <label>
            ${t('dateOfBirth')}
            <input
              type="date"
              name="birthDate"
              .value=${emp.birthDate || ''}
              @input=${() => this._clearError('birthDate')}
              required
            />
            ${this.errors.birthDate
              ? html`<div class="error">${this.errors.birthDate}</div>`
              : ''}
          </label>

          <label>
            ${t('phone')}
            <input
              type="tel"
              name="phone"
              .value=${emp.phone || ''}
              @input=${() => this._clearError('phone')}
              pattern="\\d{10}"
              required
            />
            ${this.errors.phone
              ? html`<div class="error">${this.errors.phone}</div>`
              : ''}
          </label>

          <label>
            ${t('email')}
            <input
              type="email"
              name="email"
              .value=${emp.email || ''}
              @input=${() => this._clearError('email')}
              required
            />
            ${this.errors.email
              ? html`<div class="error">${this.errors.email}</div>`
              : ''}
          </label>

          <label>
            ${t('department')}
            <select
              name="department"
              .value=${emp.department || ''}
              @change=${() => this._clearError('department')}
              required
            >
              <option value="Analytics">${t('analytics')}</option>
              <option value="Tech">${t('tech')}</option>
            </select>
            ${this.errors.department
              ? html`<div class="error">${this.errors.department}</div>`
              : ''}
          </label>

          <label>
            ${t('position')}
            <select
              name="position"
              .value=${emp.position || ''}
              @change=${() => this._clearError('position')}
              required
            >
              <option value="Junior">Junior</option>
              <option value="Medior">Medior</option>
              <option value="Senior">Senior</option>
            </select>
            ${this.errors.position
              ? html`<div class="error">${this.errors.position}</div>`
              : ''}
          </label>

          <div class="actions">
            <button type="submit" class="save">${t('save')}</button>
            <button type="button" class="cancel" @click=${this._onCancel}>
              ${t('cancel')}
            </button>
          </div>
        </form>
      </div>
    `;
  }

  _clearError(field) {
    if (this.errors[field]) {
      const {[field]: _, ...rest} = this.errors;
      this.errors = {...rest};
    }
  }

  _onCancel() {
    this.dispatchEvent(new CustomEvent('cancel', {bubbles: true}));
  }

  _onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const emp = {
      id: this.employee?.id || null,
      firstName: data.get('firstName').trim(),
      lastName: data.get('lastName').trim(),
      employmentDate: data.get('employmentDate'),
      birthDate: data.get('birthDate'),
      phone: data.get('phone'),
      email: data.get('email').trim(),
      department: data.get('department'),
      position: data.get('position'),
    };

    // validate fields
    const errors = {};
    if (!emp.firstName) errors.firstName = t('requiredValidationText');
    if (!emp.lastName) errors.lastName = t('requiredValidationText');
    if (!emp.employmentDate)
      errors.employmentDate = t('requiredValidationText');
    if (!emp.birthDate) errors.birthDate = t('requiredValidationText');
    if (
      emp.birthDate &&
      emp.employmentDate &&
      emp.birthDate >= emp.employmentDate
    )
      errors.birthDate = t('birthDateValidationText');
    if (!/^\d{10}$/.test(emp.phone)) errors.phone = t('phoneValidationText');
    if (!/.+@.+\..+/.test(emp.email)) errors.email = t('emailValidationText');
    if (!emp.department) errors.department = t('requiredValidationText');
    if (!emp.position) errors.position = t('requiredValidationText');

    this.errors = errors;
    if (Object.keys(errors).length > 0) {
      // scroll to first error
      const firstErrorField = this.renderRoot.querySelector('.error');
      firstErrorField?.scrollIntoView({behavior: 'smooth', block: 'center'});
      return;
    }

    this.dispatchEvent(new CustomEvent('save', {detail: emp, bubbles: true}));
  }
}

customElements.define('employee-form', EmployeeForm);
