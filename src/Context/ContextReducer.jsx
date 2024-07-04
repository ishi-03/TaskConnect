/* eslint-disable no-unused-vars */

let initialState = {
  userName: '',
  email: '',
  password: '',
  open: false,

  userRegister: {
    message: '',
    status: false,
  },
  userExist: {
    message: '',
    status: false,
  },
  userError: {
    message: '',
    status: false,
  },
  registerError: {
    message: '',
    status: false,
  },
};
const ContextReducer = (state, action) => {
  switch (action.type) {
    case 'USER_NAME':
      return { ...state, userName: action.payload };
    case 'EMAIL':
      return { ...state, email: action.payload };
    case 'PASSWORD':
      return { ...state, password: action.payload };
    case 'userExist':
      return {
        ...state,
        userExist: {
          ...state.userRegister,
          message: action.payload.message,
          status: action.payload.status,
        },
      };
    case 'userRegister':
      return {
        ...state,
        userRegister: {
          ...state.userRegister,
          message: action.payload.message,
          status: action.payload.status,
        },
      };
    case 'userDetailRegisterWrong':
      return {
        ...state,
        userError: {
          ...state.userError,
          message: action.payload.message,
          status: action.payload.status,
        },
      };
    case 'error':
      return {
        ...state,
        registerError: {
          ...state.registerError,
          message: action.payload.message,
          status: action.payload.status,
        },
      };
    case 'empty':
      return {
        ...state,
        userName: '',
        email: '',
        password: '',
      };
      case 'popup':
        return {
          ...state,
          open: action.payload,
        };

    case 'close': {
      return {
        ...state,
        userRegister: {
          ...state.userRegister,
          message: '',
          status: false,
        },
        userError: {
          ...state.userError,
          message: '',
          status: false,
        },
        userExist: {
          ...state.userRegister,
          message: '',
          status: false,
        },
        registerError: {
          ...state.registerError,
          message: '',
          status: false,
        },
      };
    }
    default:
      return state;
  }
};

export { ContextReducer, initialState };