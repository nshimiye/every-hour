import { delay } from 'redux-saga';
import { take, takeLatest, call, put, select, fork, race } from 'redux-saga/effects';
import { QUESTION_FETCH_SUCCEEDED, USER_LEAVES_PAGE, FETCH_QUESTION, TOOGLE_API_CALLING } from './constants';
import { resetTimer, decrementTimer } from './actions';

// START Manage Timer
const PERIOD = 5; // # secs until we generate next updated content

export function* countdown() {
  let secs = PERIOD;
  yield put(resetTimer(PERIOD));
  while (secs > 0) {
    yield call(delay, 1000);
    yield put(decrementTimer());
    secs--
  }
}

// Fetch data every 20 seconds                                           
function* startTimer() {
  try {
    console.log('[watchPollData] waiting for 5 secs...')
    yield call(countdown);
    yield put({ type: FETCH_QUESTION });
  } catch (error) {
    // cancellation error -- can handle this if you wish
    return;
  }
}

// Wait for successful response, then fire another request
// Cancel polling if user logs out                                         
function* watchStartTimer() {
  while (true) {

    yield race([
      call(startTimer),
      take(FETCH_QUESTION),
      take(USER_LEAVES_PAGE),
    ]);
    yield take(QUESTION_FETCH_SUCCEEDED);
  }
}
// END Manage Timer

// END Manage Trivia api calls
function* fetchNextQuestion() {
  console.log('[fetchNextQuestion] Fetching...')
  yield put({ type: TOOGLE_API_CALLING, loading: true });
  
  yield call(delay, 2000);
  // @TODO make api call in here
  yield call(delay, 2000);
  yield put({ type: TOOGLE_API_CALLING, loading: false });  
  console.log('[fetchNextQuestion] Fetched!')
  yield put({ type: QUESTION_FETCH_SUCCEEDED });
}
// END Manage Trivia api calls

// Individual exports for testing
export default function* defaultSaga() {
  yield [
    fork(watchStartTimer),
    takeLatest(FETCH_QUESTION, fetchNextQuestion)
    // other watchers here
  ];

}
