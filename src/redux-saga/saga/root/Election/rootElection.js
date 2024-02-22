import { DELETE_ELECTION_PROGRESS, GET_ELECTION_PROGRESS, POST_ELECTION_PROGRESS } from "../../../admin/Election/ElectionAction";
import { handle_get_election_api , handle_post_election_api , handle_delete_election_api } from "../../admin/Election/manageElection";
import { takeLatest } from "redux-saga/effects";

export function* handle_get_election_api_saga(){
    yield takeLatest(GET_ELECTION_PROGRESS, handle_get_election_api)
}

export function* handle_post_election_api_saga() {
    yield takeLatest(POST_ELECTION_PROGRESS, handle_post_election_api)
}

export function* handle_delete_election_api_saga() {
    yield takeLatest(DELETE_ELECTION_PROGRESS, handle_delete_election_api)
}