import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
} from '../constants';

const initialState = { loading: false, data: {}, error: null };

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, loading: true };

    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, data: action.payload };

    case FETCH_USER_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default usersReducer;
