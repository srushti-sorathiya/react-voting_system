import { takeLatest } from "redux-saga/effects";
import { DELETE_USER_PROGRESS, GET_USER_PROGRESS, POST_USER_PROGRESS } from "../../../admin/User/userAction";
import { handle_get_user_api, handle_post_user_api , handle_delete_user_api } from "../../admin/User/manageUser";

export function* handle_get_user_api_saga() {
    yield takeLatest(GET_USER_PROGRESS, handle_get_user_api)
}

export function* handle_post_user_api_saga() {
    yield takeLatest(POST_USER_PROGRESS, handle_post_user_api)
}

export function* handle_delete_user_api_saga() {
    yield takeLatest(DELETE_USER_PROGRESS, handle_delete_user_api)
}