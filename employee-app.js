import {LitElement, html, css} from 'lit';
import {t} from './i18n.js';

import store, {
  addEmployee,
  updateEmployee,
  deleteEmployee,
  bulkDelete,
} from './store.js';
import './employee-list.js';
import './employee-form.js';
import './confirm-dialog.js';
import './header-component.js';

export class EmployeeApp extends LitElement {
  static properties = {
    employees: {type: Array},
    selectedIds: {type: Array},
    selectedEmployee: {type: Object},
    _view: {type: String},
    _editDialogOpen: {type: Boolean},
    _deleteDialogOpen: {type: Boolean},
    _deleteTarget: {type: Object},
    _bulkDeleteDialogOpen: {type: Boolean},
  };

  static styles = css`
    .mainLayout {
      margin: 20px;
    }
  `;

  constructor() {
    super();
    this.employees = store.getState().employees;
    this.selectedIds = [];
    this.selectedEmployee = null;
    this._view = 'list';
    this._editDialogOpen = false;
    this._deleteDialogOpen = false;
    this._deleteTarget = null;
    this._bulkDeleteDialogOpen = false;

    // Subscribe to store updates
    this.unsubscribe = store.subscribe(() => {
      this.employees = store.getState().employees;
    });

    window.addEventListener('hashchange', () => this._handleRoute());
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.unsubscribe();
  }

  connectedCallback() {
    super.connectedCallback();
    this._handleRoute();
  }

  static styles = css`
    :host {
      display: block;
    }

    .main-layout {
      padding: 32px;
    }
  `;

  _handleRoute() {
    const hash = window.location.hash;
    if (hash.startsWith('#/edit/')) {
      this._view = 'edit';
      const id = hash.split('/')[2];
      this.selectedEmployee = this.employees.find((e) => e.id === id) || null;
    } else if (hash === '#/add') {
      this._view = 'add';
      this.selectedEmployee = null;
    } else {
      this._view = 'list';
    }
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="main-layout">
        <main>
          ${this._view === 'list'
            ? html`
                <div class="table-card">
                  <h1>${t('employeeList')}</h1>
                  <employee-list
                    .employees=${this.employees}
                    .selectedIds=${this.selectedIds}
                    @bulk-delete=${() => this._bulkDeletePrompt()}
                    @delete=${(e) => this._deletePrompt(e.detail)}
                    @selection-change=${(e) => (this.selectedIds = e.detail)}
                  ></employee-list>
                </div>
              `
            : ''}
          ${this._view === 'add'
            ? html`
                <employee-form
                  @save=${(e) => this._saveEmployee(e.detail)}
                  @cancel=${() => (window.location.hash = '#/list')}
                ></employee-form>
              `
            : ''}
          ${this._view === 'edit' && this.selectedEmployee
            ? html`
                <employee-form
                  .employee=${this.selectedEmployee}
                  @save=${(e) => this._editPrompt(e.detail)}
                  @cancel=${() => (window.location.hash = '#/list')}
                ></employee-form>
              `
            : ''}
        </main>
      </div>

      <confirm-dialog
        .open=${this._deleteDialogOpen}
        .message=${this._deleteTarget
          ? `${t('delete')} ${this._deleteTarget.firstName} ${
              this._deleteTarget.lastName
            }?`
          : ''}
        @confirmed=${() => this._confirmDelete()}
        @cancelled=${() => (this._deleteDialogOpen = false)}
      ></confirm-dialog>

      <confirm-dialog
        .open=${this._bulkDeleteDialogOpen}
        .message=${`Delete ${this.selectedIds.length} selected?`}
        @confirmed=${() => this._confirmBulkDelete()}
        @cancelled=${() => (this._bulkDeleteDialogOpen = false)}
      ></confirm-dialog>

      <confirm-dialog
        .open=${this._editDialogOpen}
        .message=${t('editConfirm')}
        @confirmed=${() => this._confirmEdit()}
        @cancelled=${() => (this._editDialogOpen = false)}
      ></confirm-dialog>
    `;
  }

  _editPrompt(emp) {
    this._editTarget = emp;
    this._editDialogOpen = true;
  }

  _confirmEdit() {
    this._saveEmployee(this._editTarget);
    this.selectedIds = [];
    this._editDialogOpen = false;
  }

  _deletePrompt(emp) {
    this._deleteTarget = emp;
    this._deleteDialogOpen = true;
  }

  _confirmDelete() {
    store.dispatch(deleteEmployee(this._deleteTarget.id));
    this.selectedIds = [];
    this._deleteDialogOpen = false;
  }

  _bulkDeletePrompt() {
    this._bulkDeleteDialogOpen = true;
  }

  _confirmBulkDelete() {
    store.dispatch(bulkDelete(this.selectedIds));
    this.selectedIds = [];
    this._bulkDeleteDialogOpen = false;
  }

  _saveEmployee(emp) {
    if (emp.id) {
      store.dispatch(updateEmployee(emp));
    } else {
      emp.id = Date.now().toString();
      store.dispatch(addEmployee(emp));
    }
    window.location.hash = '#/list';
  }
}
customElements.define('employee-app', EmployeeApp);
