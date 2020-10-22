import { all, takeEvery, call, put, fork } from 'redux-saga/effects';
import actions from './action';
import { api } from '../../api';

export function* getTweets() {
    yield takeEvery(actions.GET_TWEETS, function* (payload) {
        try {
            const res = yield call(api.GET, '/search', { q: payload.keyword });
            if (res.status === 200) {
                if (res.data.statuses.length === 0) {
                    yield put({
                        type: actions.SHOW_ALERT,
                        payload: {
                            message: 'Tweets Not Found!',
                            alertType: 'error'
                        }
                    });
                } else {
                    yield put({
                        type: actions.GET_TWEETS_SUCCESS,
                        payload: {
                            tweets: res.data.statuses
                        }
                    });
                }
            } else {
                yield put({
                    type: actions.SHOW_ALERT,
                    payload: {
                        message: res.data.message,
                        alertType: 'error'
                    }
                });
            }
        } catch (err) {
            yield put({
                type: actions.SHOW_ALERT,
                payload: {
                    message: err.response.data.message,
                    alertType: 'error'
                }
            });
        } finally {
            yield put({
                type: actions.WAITING,
                status: false
            });
        }
    })
}


export default function* rootSaga() {
    yield all([
        fork(getTweets),
    ]);
}
