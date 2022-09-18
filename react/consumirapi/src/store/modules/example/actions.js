import * as types from '../types';

export function clicarBotaoRequest() {
  return {
    type: types.BOTAO_CLICADO_REQUEST,
  };
}

export function clicarBotaoSuccess() {
  return {
    type: types.BOTAO_CLICADO_SUCCESS,
  };
}

export function clicarBotaoFailure() {
  return {
    type: types.BOTAO_CLICADO_FAILURE,
  };
}
