import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

// eslint-disable-next-line default-param-last
export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      console.log('Success');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.LOGIN_REQUEST: {
      console.log('REDUCER', action.payload);
      return state;
    }

    case types.LOGIN_FAILURE: {
      console.log(' Deu erro...');
      return state;
    }

    default: {
      return state;
    }
  }
}
