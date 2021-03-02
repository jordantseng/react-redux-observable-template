import { FETCH_USER } from '../constants';

export const fetchUser = (counter) => {
  return { type: FETCH_USER, payload: counter };
};
