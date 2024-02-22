import axios from "axios";
import { BASE_URL,DELETE_VOTE_URL,GET_VOTE_URL,POST_VOTE_URL} from "../../constant";

//GET vote
export async function get_vote_api() {
    return axios
        .get(BASE_URL + GET_VOTE_URL)
        .then((res) => {
            const data = res.data.Data;
            const status = res.status;
            return { data, status };
        })
        .catch((error) => {
            console.log(error);
        });
}

//POST vote
export function post_vote_api(action) {
    return axios
        .post(BASE_URL + POST_VOTE_URL, action.payload)
        .then((res) => {
            console.log(action.payload);
            const data = res.data;
            const status = res.status;
            return { data, status };
        })
        .catch((error) => {
            console.log(error);
        });
}

//DELETE vote
export function delete_vote_api(action) {
    console.log(action.payload._id);
    return axios
        .delete(BASE_URL + DELETE_VOTE_URL + action.payload._id)
        .then((res) => {
            console.log(action.payload._id);

            const data = action.payload._id;
            const status = res.status;
            return { data, status };
        })
        .catch((error) => {
            console.log(error);
        });
}