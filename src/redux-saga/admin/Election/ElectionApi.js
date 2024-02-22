import { BASE_URL, DELETE_ELECTION_URL, GET_ELECTION_URL, POST_ELECTION_URL } from "../../constant";
import axios from "axios";

// GET election 
export async function get_election_api() {
    return axios.get(BASE_URL + GET_ELECTION_URL).then((res) => {
        console.log(res, 'res from get election api');
        const data = res.data;
        const status = res.status;
        return { data, status }
    }).catch((err) => {
        console.log(err);
    })
}

// ADD election
export function post_election_api(action) {
    return axios.post(BASE_URL + POST_ELECTION_URL, action.payload).then((res) => {
        console.log(res, 'res from post election api');
        const data = res.data;
        const status = res.status;
        return { data, status }
    }).catch((err) => {
        console.log(err);
    })
}

// DELETE election
export function delete_election_api(action) {
    return axios.delete(BASE_URL + DELETE_ELECTION_URL + action.payload._id).then((res) => {
        console.log(res, 'res from post elecction api');
        const data = action.payload._id;
        const status = res.status;
        return { data, status }
    }).catch((err) => {
        console.log(err);
    })
}