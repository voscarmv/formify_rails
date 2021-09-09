import { all, call, delay, put, takeEvery } from 'redux-saga/effects'

const fetchCreate = async (request) => {
  const response = await fetch(
    request.url,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(request.data),
    },
  );
  if(response.status !== 200){
    throw Error(`${response.status} ${response.statusText}`);
  }
  return await response.json();
};

const fetchRead = (request) => {

};

const fetchUpdate = (request) => {

};

const fetchDelete = (request) => {

};

const fetchList = async (request) => {
  const response = await fetch(
    request.url,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    },
  );
  if(response.status !== 200){
    throw Error(`${response.status} ${response.statusText}`);
  }
  return await response.json();
};

function* create(action){
  // yield put({type: 'LOADING'});
  // const url = `https://localhost:3000/${action.table}`;
  // const data = action.data;
  // try {
  //   const response = yield call(fetchCreate, {url, data});
  //   yield put({ type: 'SUCCESS', payload: JSON.stringify(response) })
  // } catch(e) {
  //   yield put({ type: 'ERROR', error: e.message });
  // }
}

function* read(action) {
}

function* update(action) {

}

function* deleter(action) {

}

function list(action){
  // yield put({type: 'LOADING'});
  // const url = `https://localhost:3000/${action.table}`;
  // try {
  //   const response = yield call(fetchList, {url});
  //   yield put({ type: 'SUCCESS', payload: JSON.stringify(response) })
  // } catch(e) {
  //   yield put({ type: 'ERROR', error: e.message });
  // }
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

export function* incrementAsync() {
  yield delay(1000)
  yield put({type: 'INCREMENT'})
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    call(watchIncrementAsync),
    call(watchCreate),
    call(watchRead),
    call(watchUpdate),
    call(watchDelete),
    call(watchList),
  ])
}