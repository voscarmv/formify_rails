import { all, call, put, takeEvery } from 'redux-saga/effects'
import { fetchCreate, fetchRead, fetchUpdate, fetchDelete, fetchList } from './Api';

function* create(action){
  console.log(action);
  yield put({type: 'LOADING'});
  const url = `http://localhost:3000/${action.table}`;
  const data = action.data;
  try {
    const response = yield call(fetchCreate, {url, data});
    yield put({ type: 'SUCCESS', payload: JSON.stringify(response) })
  } catch(e) {
    yield put({ type: 'ERROR', error: e.message });
  }
}

function* read(action) {
  console.log(action);
  yield put({type: 'LOADING'});
  const url = `http://localhost:3000/${action.table}/${action.id}`;
  try {
    const response = yield call(fetchRead, {url});
    yield put({ type: 'SUCCESS', payload: JSON.stringify(response) })
  } catch(e) {
    yield put({ type: 'ERROR', error: e.message });
  }  
}

function* update(action) {
  console.log(action);
  yield put({type: 'LOADING'});
  const url = `http://localhost:3000/${action.table}/${action.id}`;
  const data = action.data;
  try {
    const response = yield call(fetchUpdate, {url, data});
    yield put({ type: 'SUCCESS', payload: JSON.stringify(response) })
  } catch(e) {
    yield put({ type: 'ERROR', error: e.message });
  }
}

function* deleter(action) {
  console.log(action);
  yield put({type: 'LOADING'});
  const url = `http://localhost:3000/${action.table}/${action.id}`;
  try {
    const response = yield call(fetchDelete, {url});
    yield put({ type: 'SUCCESS', payload: JSON.stringify(response) })
  } catch(e) {
    yield put({ type: 'ERROR', error: e.message });
  }
}

function* list(action){
  yield put({type: 'LOADING'});
  const url = `http://localhost:3000/${action.table}`;
  try {
    let response = yield call(fetchList, {url});
    response = JSON.stringify(response);
    console.log(response);
    yield put({ type: 'SUCCESS', payload: response })
  } catch(e) {
    yield put({ type: 'ERROR', error: e.message });
  }
}

export function* watchCreate() {
  yield takeEvery('CREATE', create);
}

export function* watchRead() {
  yield takeEvery('READ', read);
}

export function* watchUpdate() {
  yield takeEvery('UPDATE', update);
}

export function* watchDelete() {
  yield takeEvery('DELETE', deleter);
}

export function* watchList() {
  yield takeEvery('LIST', list);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    call(watchCreate),
    call(watchRead),
    call(watchUpdate),
    call(watchDelete),
    call(watchList),
  ])
}