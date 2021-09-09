import types from './types';

const create = (record) => ({
  type: types.CREATE,
  table: record.table,
  data: record.data,
})

const list = (record) => ({
  type: types.LIST,
  table: record.table,
});

const increment = () => ({
  type: types.INCREMENT,
});

export const decrement = () => ({
  type: types.DECREMENT,
});

export const incrementAsync = error => ({
  type: types.INCREMENT_ASYNC,
});

export default increment;