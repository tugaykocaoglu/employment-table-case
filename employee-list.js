import {LitElement, html, css} from 'lit';
import {t} from './i18n.js';

export class EmployeeList extends LitElement {
  static properties = {
    employees: Array,
    selectedIds: Array,
    viewType: String,
    searchTerm: String,
    currentPage: Number,
    pageSize: Number,
  };
  constructor() {
    super();
    this.selectedIds = [];
    this.viewType = 'table';
    this.searchTerm = '';
    this.currentPage = 1;
    this.pageSize = 10;
  }
  static styles = css`
    .table-container {
      overflow-x: auto;
    }

    .controls {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 16px;
    }
    .controls button,
    .controls select,
    .controls input {
      padding: 6px 12px;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
    }
    .controls button:disabled {
      opacity: 0.5;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      background: #fff;
    }
    th {
      background: #fff;
      color: #ff6600;
      font-weight: 600;
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #e8e8e8;
    }
    td {
      padding: 12px;
      border-bottom: 1px solid #f0f0f0;
      color: #555;
    }
    tr:hover {
      background: #fafafa;
    }
    tr.selected {
      background: #fff7e6;
    }
    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-top: 16px;
    }
    .pagination button {
      border: none;
      background: none;
      padding: 6px 8px;
      cursor: pointer;
      color: #555;
      font-weight: 500;
    }
    .pagination button.active,
    .pagination button:hover {
      color: #ff6600;
      font-weight: 600;
    }

    .view {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .view img {
      height: 20px;
    }

    .view .active {
      color: #ff6600;
    }

    .list {
      padding-inline: 0;
      display: flex;
      flex-direction: column;
    }

    .listItem {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 16px;
      padding: 8px;
      border-bottom: 1px solid #f0f0f0;
    }
    .listItem:first-child {
      justify-content: flex-start;
      margin-bottom: 12px;
    }

    .list-buttons {
      display: flex;
      gap: 8px;

      button {
        height: 32px;
      }
    }

    .noData {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
    }

    .tableActions {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
    }

    .info {
      display: flex;
    }
  `;
  get filtered() {
    const term = this.searchTerm.toLowerCase();
    return this.employees.filter(
      (e) =>
        e.firstName.toLowerCase().includes(term) ||
        e.lastName.toLowerCase().includes(term) ||
        e.email.toLowerCase().includes(term)
    );
  }
  get paged() {
    const s = (this.currentPage - 1) * this.pageSize;
    return this.filtered.slice(s, s + this.pageSize);
  }
  render() {
    const totalPages = Math.ceil(this.filtered.length / this.pageSize);
    return html`
      <div class="controls">
        <div class="tableActions">
          <div>
            <span>${t('search')}:</span
            ><input
              type="text"
              .value=${this.searchTerm}
              @input=${(e) => {
                this.searchTerm = e.target.value;
                this.currentPage = 1;
              }}
              placeholder="${t('search')}"
            />
          </div>
          <div>
            <button @click=${() => (window.location.hash = '#/add')}>
              ${t('addEmployee')}
            </button>
            <button
              @click=${() => this.dispatchEvent(new CustomEvent('bulk-delete'))}
              ?disabled=${this.selectedIds.length === 0}
            >
              ${t('deleteSelected')}
            </button>
          </div>
        </div>
        <div class="view">
          <button
            type="link"
            class=${this.viewType === 'table' ? 'active' : ''}
            @click=${() => {
              this.viewType = 'table';
              this.currentPage = 1;
            }}
          >
            ${t('table')}
          </button>
          <button
            class=${this.viewType === 'list' ? 'active' : ''}
            @click=${() => {
              this.viewType = 'list';
              this.currentPage = 1;
            }}
          >
            ${t('list')}
          </button>
        </div>
      </div>
      ${this.paged.length <= 0
        ? html`<div class="noData">${t('noData')}</div>`
        : this.viewType === 'table'
        ? this._renderTable()
        : this._renderList()}
      ${this.paged.length <= 0
        ? ''
        : html`<div class="pagination">
            <button
              @click=${() =>
                (this.currentPage = Math.max(1, this.currentPage - 1))}
              ?disabled=${this.currentPage === 1}
            >
              <
            </button>
            ${Array.from({length: totalPages}, (_, i) => i + 1).map(
              (page) =>
                html`<button
                  class=${page === this.currentPage ? 'active' : ''}
                  @click=${() => (this.currentPage = page)}
                >
                  ${page}
                </button>`
            )}
            <button
              @click=${() =>
                (this.currentPage = Math.min(totalPages, this.currentPage + 1))}
              ?disabled=${this.currentPage === totalPages}
            >
              >
            </button>
          </div>`}
    `;
  }
  _renderTable() {
    return html` <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                @change=${this._toggleSelectAll}
                .checked=${this._allSelected()}
              />
            </th>
            <th>${t('firstName')}</th>
            <th>${t('lastName')}</th>
            <th>${t('dateOfEmployment')}</th>
            <th>${t('dateOfBirth')}</th>
            <th>${t('phone')}</th>
            <th>${t('email')}</th>
            <th>${t('department')}</th>
            <th>${t('position')}</th>
            <th>${t('save')}</th>
          </tr>
        </thead>
        <tbody>
          ${this.paged.map(
            (emp) =>
              html`<tr
                class=${this.selectedIds.includes(emp.id) ? 'selected' : ''}
              >
                <td>
                  <input
                    type="checkbox"
                    .checked=${this.selectedIds.includes(emp.id)}
                    @change=${(e) => this._toggleSelect(emp, e.target.checked)}
                  />
                </td>
                <td>${emp.firstName}</td>
                <td>${emp.lastName}</td>
                <td>${emp.employmentDate}</td>
                <td>${emp.birthDate}</td>
                <td>${emp.phone}</td>
                <td>${emp.email}</td>
                <td>${emp.department}</td>
                <td>${emp.position}</td>
                <td>
                  ${this.selectedIds.length <= 0
                    ? html`<div class="list-buttons">
                        <button
                          @click=${() =>
                            (window.location.hash = `#/edit/${emp.id}`)}
                        >
                          ${t('edit')}</button
                        ><button
                          @click=${() =>
                            this.dispatchEvent(
                              new CustomEvent('delete', {detail: emp})
                            )}
                        >
                          ${t('delete')}
                        </button>
                      </div>`
                    : null}
                </td>
              </tr>`
          )}
        </tbody>
      </table>
    </div>`;
  }
  _renderList() {
    return html` <div class="list">
      <div class="listItem">
        <input
          type="checkbox"
          @change=${this._toggleSelectAll}
          .checked=${this._allSelected()}
        />
        ${t('selectAll')}
      </div>
      ${this.paged.map(
        (emp) =>
          html` <div class="listItem">
            <div class="info">
              <input
                type="checkbox"
                .checked=${this.selectedIds.includes(emp.id)}
                @change=${(e) => this._toggleSelect(emp, e.target.checked)}
                style="margin-right:8px;"
              />

              <div
                style="display:flex; flex-direction:column; gap: 8px; color: gray"
              >
                <div>${emp.firstName} ${emp.lastName} - ${emp.email}</div>
                <div>${t('dateOfBirth')}: ${emp.birthDate}</div>
                <div>${t('dateOfEmployment')}: ${emp.employmentDate}</div>
                <div>${t('department')}: ${emp.department}</div>
                <div>${t('position')}: ${emp.position}</div>
                <div>${t('phone')}: ${emp.phone}</div>
              </div>
            </div>
            <div class="list-buttons">
              <button
                @click=${() => (window.location.hash = `#/edit/${emp.id}`)}
              >
                ${t('edit')}</button
              ><button
                @click=${() =>
                  this.dispatchEvent(new CustomEvent('delete', {detail: emp}))}
              >
                ${t('delete')}
              </button>
            </div>
          </div>`
      )}
    </div>`;
  }
  _toggleSelect(emp, checked) {
    this.selectedIds = checked
      ? [...this.selectedIds, emp.id]
      : this.selectedIds.filter((id) => id !== emp.id);
    this.dispatchEvent(
      new CustomEvent('selection-change', {detail: this.selectedIds})
    );
  }
  _allSelected() {
    return (
      this.paged.length > 0 &&
      this.paged.every((e) => this.selectedIds.includes(e.id))
    );
  }
  _toggleSelectAll(e) {
    this.selectedIds = e.target.checked ? this.paged.map((e) => e.id) : [];
    this.dispatchEvent(
      new CustomEvent('selection-change', {detail: this.selectedIds})
    );
  }
}
customElements.define('employee-list', EmployeeList);
