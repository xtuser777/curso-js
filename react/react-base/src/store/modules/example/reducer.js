import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

// eslint-disable-next-line default-param-last
export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO: {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    default: {
      return state;
    }
  }
}
