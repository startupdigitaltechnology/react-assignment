export default function (state = [], action = {}) {
  switch (action.type) {
    case 'GET_USERS_PENDING':
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case 'GET_USERS_FULFILLED':
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        error: false,
      };

    case 'GET_USERS_REJECTED':
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    default:
      return {
        ...state,
      };
  }
}
