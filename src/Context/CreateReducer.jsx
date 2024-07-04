/* eslint-disable no-unused-vars */

let initialState = {
  open: false,
  description: "",
  title: "",
  toastMessage: "",
  createdWrong: "",
  created: "",
  NoData: "",
  registerError: {
    message: '',
    status: false,
  },
  successDelete: {
    message: '',
    status: false,
  },
  successUpdate: {
    message: '',
    status: false,
  },
  unsuccessUpdate: {
    message: 'Error',
    status: false,
  },
};

const CreateReducer = (state, action) => {
  switch (action.type) {
    case "close":
      return {
        created: {
          ...state.toastMessage,
          message: "",
          status: false,
        },
        successDelete: {
          ...state.successDelete,
          message: '',
          status: false,
        },
        successUpdate: {
          ...state.successUpdate,
          message: '',
          status: false,
        },
        unsuccessUpdate: {
          ...state.successUpdate,
          message: '',
          status: false,
        },
        registerError: {
          ...state.registerError,
          message: '',
          status: false,
        },
      };
    case "popup":
      return {
        ...state,
        open: action.payload,
      };

    case "description":
      return {
        ...state,
        description: action.payload,
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
    case "title":
      return {
        ...state,
        title: action.payload,
      };
    case "createdSuccessFully":
      return {
        ...state,
        created: {
          ...state.created,
          message: action.payload.message,
          status: action.payload.status,
        },
      };
    case "createdWrong":
      return {
        ...state,
        createdWrong: {
          ...state.createdWrong,
          message: action.payload.message,
          status: action.payload.status,
        },
      };
    case "NoData":
      return {
        ...state,
        NoData: {
          ...state.NoData,
          message: action.payload.message,
          status: action.payload.status,
        },
      };
      case 'deletedSuccessFully':
      return {
        ...state,
        successDelete: {
          ...state.successDelete,
          message: action.payload.message,
          status: action.payload.status,
        },
      };
      case 'updatedSuccessFully':
      return {
        ...state,
        successUpdate: {
          ...state.successUpdate,
          message: action.payload.message,
          status: action.payload.status,
        },
      };
      case 'deletedWrong':
        return {
          ...state,
          successDelete: {
            ...state.successDelete,
            message: action.payload.message,
            status: action.payload.status,
          },
        };
        case 'updatedWrong':
        return {
          ...state,
          unsuccessUpdate: {
            ...state.unsuccessUpdate,
            message: action.payload.message,
            status: action.payload.status,
          },
        };
    case "empty":
      return {
        ...state,
        title: " ",
        description: " ",
      };
    default:
      return state;
  }
};
export { CreateReducer, initialState };
