import types from './types';

export const create = (record) => ({
  type: types.CREATE,
  table: record.table,
  data: record.data,
})

export const read = (record) => ({
  type: types.READ,
  table: record.table,
  id: record.id,
})

export const update = (record) => ({
  type: types.UPDATE,
  table: record.table,
  data: record.data,
  id: record.id,
})

export const deleter = (record) => ({
  type: types.DELETE,
  table: record.table,
  id: record.id,
})

export const list = (record) => ({
  type: types.LIST,
  table: record.table,
});
