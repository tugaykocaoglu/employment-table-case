// A fake employee list for routing tests
const fakeEmployees = [
  {id: '1', firstName: 'Alice', lastName: 'Smith'},
  {id: '2', firstName: 'Bob', lastName: 'Jones'},
];

export default {
  getState() {
    return {employees: fakeEmployees};
  },
  subscribe(cb) {
    // Immediately invoke subscribers so your component picks up initial state
    cb();
    return () => {}; // unsubscribe no-op
  },
  dispatch() {
    // no-op
  },
};

// Stub out all action creators (they can just return a dummy action)
export const addEmployee = () => ({type: 'ADD'});
export const updateEmployee = () => ({type: 'UPDATE'});
export const deleteEmployee = () => ({type: 'DELETE'});
export const bulkDelete = () => ({type: 'BULK_DELETE'});
