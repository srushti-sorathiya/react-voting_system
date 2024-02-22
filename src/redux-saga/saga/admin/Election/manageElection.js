import { delete_election_api, get_election_api, post_election_api } from "../../../admin/Election/ElectionApi";
import { call, put } from "redux-saga/effects";
import { GET_ELECTION_SUCCESS, GET_ELECTION_ERROR, POST_ELECTION_SUCCESS, POST_ELECTION_ERROR, DELETE_ELECTION_SUCCESS, DELETE_ELECTION_ERROR } from "../../../admin/Election/ElectionAction";

// GET election 
export function* handle_get_election_api(action) {
    try {
        const res = yield call(get_election_api, action);
        console.log(res, 'res from manage get election');
        const data = res.data;
        const status = res.status;
        if (status === 200 || status === 201) {
            yield put({ type: GET_ELECTION_SUCCESS, data })
        } else {
            yield put({ type: GET_ELECTION_ERROR, data })
        }
    } catch (error) {
        yield put({ type: GET_ELECTION_ERROR, error })
    }
}

// POST election
export function* handle_post_election_api(action) {
    console.log(action, 'action from manage post');
    try {
        const res = yield call(post_election_api, action);
        console.log(res, 'res from manage get election');
        const data = res.data;
        const status = res.status;
        if (status === 200 || status === 201) {
            yield put({ type: POST_ELECTION_SUCCESS, data })
        } else {
            yield put({ type: POST_ELECTION_ERROR, data })
        }
    } catch (error) {
        yield put({ type: POST_ELECTION_ERROR, error })
    }
}

// DELETE election
export function* handle_delete_election_api(action) {
    console.log(action, 'action from manage post');
    try {
        const res = yield call(delete_election_api, action);
        console.log(res, 'res from manage get election');
        const data = res.data;
        const status = res.status;
        if (status === 200 || status === 201) {
            yield put({ type: DELETE_ELECTION_SUCCESS, data })
        } else {
            yield put({ type: DELETE_ELECTION_ERROR, data })
        }
    } catch (error) {
        yield put({ type: DELETE_ELECTION_ERROR, error })
    }
}