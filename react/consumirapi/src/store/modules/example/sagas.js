import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';

const request = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1500);
  });

function* exampleRequest() {
  try {
    yield call(request);
    yield put(actions.clicarBotaoSuccess());
  } catch {
    yield put(actions.clicarBotaoFailure());
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
