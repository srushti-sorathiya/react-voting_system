import { takeLatest } from "redux-saga/effects";
import { DELETE_PARTY_CONNECTION_PROGRESS, GET_PARTY_CONNECTION_PROGRESS, POST_PARTY_CONNECTION_PROGRESS } from "../../../admin/Party-Connection/PartyConnectionAction";
import { handle_get_party_connection_api, handle_post_party_connection_api, handle_delete_party_connection_api } from "../../admin/Party-Connection/managePartyConnection";

export function* handle_get_party_connection_api_saga(){
    yield takeLatest(GET_PARTY_CONNECTION_PROGRESS , handle_get_party_connection_api)
}

export function* handle_post_party_connection_api_saga() {
    yield takeLatest(POST_PARTY_CONNECTION_PROGRESS, handle_post_party_connection_api)
}

export function* handle_delete_party_connection_api_saga() {
    yield takeLatest(DELETE_PARTY_CONNECTION_PROGRESS, handle_delete_party_connection_api)
}