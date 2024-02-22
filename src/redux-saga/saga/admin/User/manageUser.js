import { call } from "redux-saga/effects";
import { delete_user_api, get_user_api, post_user_api } from "../../../admin/User/userApi";
import { GET_USER_SUCCESS, GET_USER_ERROR, POST_USER_SUCCESS, POST_USER_ERROR, DELETE_USER_SUCCESS, DELETE_USER_ERROR } from "../../../admin/User/userAction";
import { put } from "redux-saga/effects";

// GET user
export function* handle_get_user_api(action) {
    try {
        const res = yield call(get_user_api, action)
        console.log(res, 'res from user manage');

        const data = res.data;
        const status = res.status;

        if (status === 200) {
            yield put({ type: GET_USER_SUCCESS, data })
        } else {
            yield put({ type: GET_USER_ERROR, data })
        }
    } catch (e) {
        yield put({ type: GET_USER_ERROR, e })
    }

}

// POST user
export function* handle_post_user_api(action) {
    try {
        const res = yield call(post_user_api, action)
        console.log(res, 'res from user manage');

        const data = res.data;
        const status = res.status;

        if (status === 200) {
            yield put({ type: POST_USER_SUCCESS, data })
        } else {
            yield put({ type: POST_USER_ERROR, data })
        }
    } catch (e) {
        yield put({ type: POST_USER_ERROR, e })
    }

}

// DELETE user
export function* handle_delete_user_api(action) {
    try {
        const res = yield call(delete_user_api, action)
        console.log(res, 'res from user manage');

        const data = res.data;
        const status = res.status;

        if (status === 200) {
            yield put({ type: DELETE_USER_SUCCESS, data })
        } else {
            yield put({ type: DELETE_USER_ERROR, data })
        }
    } catch (e) {
        yield put({ type: DELETE_USER_ERROR, e })
    }

}

