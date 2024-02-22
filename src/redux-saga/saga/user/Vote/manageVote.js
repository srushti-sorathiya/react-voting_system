import { call, put } from "redux-saga/effects";
import { get_vote_api, post_vote_api, delete_vote_api } from "../../../user/Vote/voteApi";
import { GET_VOTE_SUCCESS, GET_VOTE_ERROR, POST_VOTE_SUCCESS, POST_VOTE_ERROR, DELETE_VOTE_SUCCESS, DELETE_VOTE_ERROR } from "../../../user/Vote/voteAction";
export function* handle_Get_vote_api(action) {
    try {
        const res = yield call(get_vote_api, action);
        const data = res.data;
        const status = res.status;
        if (status === 200 || status === 201) {
            yield put({ type: GET_VOTE_SUCCESS, data });
        } else {
            yield put({ type: GET_VOTE_ERROR, data });
        }
    } catch (error) {
        yield put({ type: GET_VOTE_ERROR, error });
    }
}

export function* handle_post_vote_api(action) {
    try {
        const res = yield call(post_vote_api, action);
        const data = res.data;
        const status = res.status;
        if (status === 200 || status === 201) {
            yield put({ type: POST_VOTE_SUCCESS, data });
        } else {
            yield put({ type: POST_VOTE_ERROR, data });
        }
    } catch (error) {
        yield put({ type: POST_VOTE_ERROR, error });
    }
}

export function* handle_delete_vote_api(action) {
    try {
        const res = yield call(delete_vote_api, action);
        const data = res.data;
        const status = res.status;
        if (status === 200) {
            yield put({ type: DELETE_VOTE_SUCCESS, data });
        } else {
            yield put({ type: DELETE_VOTE_ERROR, data });
        }
    } catch (error) {
        yield put({ type: DELETE_VOTE_ERROR, error });
    }
}
