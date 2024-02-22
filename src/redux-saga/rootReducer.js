import { combineReducers } from "redux";
import electionReducer from "./admin/Election/ElectionReducer";
import partyReducer from "./admin/Party/PartyReducer";
import userReducer from "./admin/User/userReducer";
import partyConnectionReducer from "./admin/Party-Connection/PartyConnectionReducer";
import VoteReducer from "./user/Vote/voteReducer";

const rootReducer = combineReducers({
   electionReducer, partyReducer, userReducer, partyConnectionReducer,
     VoteReducer
})

export default rootReducer;