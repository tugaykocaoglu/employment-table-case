import {configureStore, createSlice} from '@reduxjs/toolkit';

// Load persisted or default employees
const persisted = JSON.parse(localStorage.getItem('employees') || 'null');

const employeesSlice = createSlice({
  name: 'employees',
  initialState: persisted || [],
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload);
    },
    updateEmployee: (state, action) => {
      const idx = state.findIndex((e) => e.id === action.payload.id);
      if (idx !== -1) state[idx] = action.payload;
    },
    deleteEmployee: (state, action) => {
      return state.filter((e) => e.id !== action.payload);
    },
    bulkDelete: (state, action) => {
      const ids = action.payload;
      return state.filter((e) => !ids.includes(e.id));
    },
  },
});

export const {addEmployee, updateEmployee, deleteEmployee, bulkDelete} =
  employeesSlice.actions;

const store = configureStore({
  reducer: {employees: employeesSlice.reducer},
});

// Persist on change
store.subscribe(() => {
  localStorage.setItem('employees', JSON.stringify(store.getState().employees));
});

export default store;
