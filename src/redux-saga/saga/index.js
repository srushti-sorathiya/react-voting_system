import { all } from "@redux-saga/core/effects";
import { handle_delete_election_api_saga, handle_get_election_api_saga, handle_post_election_api_saga } from "./root/Election/rootElection";
import { handle_delete_party_api_saga, handle_get_party_api_saga, handle_post_party_api_saga } from "../root/party/rootParty";
import { handle_delete_user_api_saga, handle_get_user_api_saga, handle_post_user_api_saga } from "./root/User/rootUser";
import { handle_delete_party_connection_api_saga, handle_get_party_connection_api_saga, handle_post_party_connection_api_saga } from "./root/Party_Connection/rootPartyConnection";
import { handle_delete_vote_saga, handle_get_vote_saga, handle_post_vote_saga } from "./root/Vote/rootVote";

export function* rootSaga() {
    yield all([handle_get_election_api_saga(), handle_post_election_api_saga(),
    handle_delete_election_api_saga(),
    handle_get_party_api_saga(),
    handle_post_party_api_saga(),
    handle_delete_party_api_saga(),
    handle_get_user_api_saga(), handle_post_user_api_saga(),handle_delete_user_api_saga(),handle_get_party_connection_api_saga(),
    handle_post_party_connection_api_saga(),
    handle_delete_party_connection_api_saga(),
     handle_get_vote_saga(),
      handle_post_vote_saga(), handle_delete_vote_saga()
])
}