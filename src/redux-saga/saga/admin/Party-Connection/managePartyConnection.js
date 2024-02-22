import { call , put } from "redux-saga/effects";
import { get_party_connection_api, post_party_connection_api, delete_party_connection_api } from "../../../admin/Party-Connection/PartyConnectionApi";
import { GET_PARTY_CONNECTION_ERROR, GET_PARTY_CONNECTION_SUCCESS, POST_PARTY_CONNECTION_ERROR, POST_PARTY_CONNECTION_SUCCESS } from "../../../admin/Party-Connection/PartyConnectionAction";
import { DELETE_PARTY_CONNECTION_SUCCESS, DELETE_PARTY_CONNECTION_ERROR } from "../../../admin/Party-Connection/PartyConnectionAction";

export function* handle_get_party_connection_api(action){
    try{
        const res = yield call(get_party_connection_api, action);
        console.log(res , 'res from manage PC');
        const data = res.data;
        const status = res.status;
        if (status === 200 || status === 201) {
            yield put({ type: GET_PARTY_CONNECTION_SUCCESS, data });
        } else {
            yield put({ type: GET_PARTY_CONNECTION_ERROR, data });
        }
    }catch(err){
        yield put({ type: GET_PARTY_CONNECTION_ERROR, err });
    }
}

export function* handle_post_party_connection_api(action) {
    try {
        const res = yield call(post_party_connection_api, action);
        console.log(res, 'res from manage PC');
        const data = res.data;
        const status = res.status;
        if (status === 200 || status === 201) {
            yield put({ type: POST_PARTY_CONNECTION_SUCCESS, data });
        } else {
            yield put({ type: POST_PARTY_CONNECTION_ERROR, data });
        }
    } catch (err) {
        yield put({ type: POST_PARTY_CONNECTION_ERROR, err });
    }
}

export function* handle_delete_party_connection_api(action) {
    try {
        const res = yield call(delete_party_connection_api, action);
        const data = res.data;
        const status = res.status;
        if (status === 200) {
            yield put({ type: DELETE_PARTY_CONNECTION_SUCCESS, data });
        } else {
            yield put({ type: DELETE_PARTY_CONNECTION_ERROR, data });
        }
    } catch (error) {
        yield put({ type: DELETE_PARTY_CONNECTION_ERROR, error });
    }
}

