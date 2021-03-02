import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError, switchMap } from 'rxjs/operators';
import { FETCH_USER, FETCH_USER_ERROR, FETCH_USER_SUCCESS } from '../constants';

export const getUserEpic$ = (action$, state$) => {
  return action$.pipe(
    ofType(FETCH_USER),
    switchMap((action) =>
      ajax
        .getJSON(`https://jsonplaceholder.typicode.com/users/${action.payload}`)
        .pipe(
          map((result) => ({ type: FETCH_USER_SUCCESS, payload: result })),
          catchError((error) => of({ type: FETCH_USER_ERROR, payload: error }))
        )
    )
  );
};
