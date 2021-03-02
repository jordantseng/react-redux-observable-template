import { combineEpics } from 'redux-observable';
import { getUserEpic$ } from './usersEpic';

const epics = combineEpics(getUserEpic$);

export default epics;
