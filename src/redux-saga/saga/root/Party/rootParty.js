import { takeLatest } from "redux-saga/effects";
import { DELETE_PARTY_PROGRESS, GET_PARTY_PROGRESS, POST_PARTY_PROGRESS } from "../../../admin/Party/PartyAction";
import { handle_get_party_api, handle_post_party_api, handle_delete_party_api } from "../../admin/Party/manageParty";

export function* handle_get_party_api_saga() {
    yield takeLatest(GET_PARTY_PROGRESS, handle_get_party_api)
}

export function* handle_post_party_api_saga() {
    yield takeLatest(POST_PARTY_PROGRESS, handle_post_party_api)
}

export function* handle_delete_party_api_saga() {
    yield takeLatest(DELETE_PARTY_PROGRESS, handle_delete_party_api)
}