import { delay } from 'redux-saga';
import { take, takeLatest, call, put, fork, race } from 'redux-saga/effects';
import request from 'utils/request';

import {
  QUESTION_FETCH_SUCCEEDED, USER_LEAVES_PAGE,
  FETCH_QUESTION, TOOGLE_API_CALLING,
  EVALUATE_RESPONSE,
} from './constants';
import { resetTimer, decrementTimer, updateStoredQuestion, updateStoredResponse } from './actions';

// START Manage Timer
const PERIOD = 30; // # secs until we generate next updated content
const runForEver = true;

export function* countdown() {
  let secs = PERIOD;
  yield put(resetTimer(PERIOD));
  while (secs > 0) {
    yield call(delay, 1000);
    yield put(decrementTimer());
    secs -= 1;
  }
}

// Fetch data every 20 seconds
function* startTimer() {
  try {
    // console.log('[watchPollData] waiting for 5 secs...');
    yield call(countdown);
    yield put({ type: FETCH_QUESTION });
  } catch (error) {
    // cancellation error -- can handle this if you wish
    // return;
  }
}

// Wait for successful response, then fire another request
// Cancel polling if user logs out
function* watchStartTimer() {
  while (runForEver) {
    yield race({
      startTimer: call(startTimer),
      cancelTimerOnFetch: take(FETCH_QUESTION),
      cancelTimerOnLeave: take(USER_LEAVES_PAGE),
    });
    yield take(QUESTION_FETCH_SUCCEEDED);
  }
}
// END Manage Timer

// END Manage Trivia api calls
function* fetchNextQuestion() {
  console.log('[fetchNextQuestion] Fetching...');
  yield put({ type: TOOGLE_API_CALLING, loading: true });
  yield put(updateStoredResponse(null));

  const requestURL = 'https://opentdb.com/api.php?amount=1&type=boolean&encode=url3986';

  // yield call(delay, 2000);
  try {
    const { results: [{
      question: content,
      correct_answer: answer,
      ...rest
    }] } = yield call(request, requestURL);
    console.log('[fetchNextQuestion] Fetching...', content, answer, rest);

    const question = {
      featuredImage: `https://picsum.photos/100/100/?image=${Math.floor(Math.random() * 1010) + 100}`,
      content: decodeURIComponent(content),
      answer: (answer === 'True'),
    };
    const choices = [true, false];
    yield put(updateStoredQuestion({ question, choices }));
  } catch (error) {
    // @TODO show error notification
  }


  yield put({ type: TOOGLE_API_CALLING, loading: false });
  console.log('[fetchNextQuestion] Fetched!');
  yield put({ type: QUESTION_FETCH_SUCCEEDED });
}
// END Manage Trivia api calls

function* evaluateUserResponse({ question, response }) {
  console.log('[evaluateUserResponse] Evaluating...');
  yield put({ type: TOOGLE_API_CALLING, loading: true });

  yield call(delay, 100);

  const { content } = response;
  const correct = question.answer === content;
  console.log('[evaluateUserResponse]', question, content);
  yield put(updateStoredResponse({ content, correct }));

  yield call(delay, 100);

  yield put({ type: TOOGLE_API_CALLING, loading: false });
  console.log('[evaluateUserResponse] Evaluate!');
}

// Individual exports for testing
export default function* defaultSaga() {
  yield [
    fork(watchStartTimer),
    takeLatest(FETCH_QUESTION, fetchNextQuestion),
    takeLatest(EVALUATE_RESPONSE, evaluateUserResponse),
    // other watchers here
  ];
}
