import { DELETE_PARTY_ERROR, DELETE_PARTY_SUCCESS, GET_PARTY_ERROR, GET_PARTY_SUCCESS, POST_PARTY_ERROR, POST_PARTY_SUCCESS } from "../../../admin/Party/PartyAction";
import { delete_party_api, get_party_api, post_party_api } from "../../../admin/Party/PartyApi";
import { call, put } from "redux-saga/effects";

export function* handle_get_party_api(action){
    try{
        const res = yield call(get_party_api, action)
        console.log(res,'res from get party manange');

        const data = res.data;
        const status = res.status;

        if (status === 200) {
            yield put({ type: GET_PARTY_SUCCESS, data })
        } else {
            yield put({ type: GET_PARTY_ERROR, data })
        }
    }catch(e){
        yield put({ type: GET_PARTY_ERROR, e})
    }
}

export function* handle_post_party_api(action) {
    try {
        const res = yield call(post_party_api, action)
        console.log(res, 'res from post party manange');

        const data = res.data;
        const status = res.status;

        if (status === 200) {
            yield put({ type: POST_PARTY_SUCCESS, data })
        } else {
            yield put({ type: POST_PARTY_ERROR, data })
        }
    } catch (e) {
        yield put({ type: POST_PARTY_ERROR, e })
    }
}

export function* handle_delete_party_api(action) {
    try {
        const res = yield call(delete_party_api, action)
        console.log(res, 'res from post party manange');

        const data = res.data;
        const status = res.status;

        if (status === 200) {
            yield put({ type: DELETE_PARTY_SUCCESS, data })
        } else {
            yield put({ type: DELETE_PARTY_ERROR, data })
        }
    } catch (e) {
        yield put({ type: DELETE_PARTY_ERROR, e })
    }
}