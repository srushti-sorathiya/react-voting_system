import axios from "axios";
import { BASE_URL, DELETE_PARTY_URL, GET_PARTY_URL, POST_PARTY_URL } from "../../constant";

// GET party
export function get_party_api() {
    return axios.get(BASE_URL + GET_PARTY_URL).then((res) => {
        console.log(res);

        const data = res.data;
        const status = res.status
        return {
            data, status
        }
    }).catch((err) => {
        console.log(err);
    })
}
// POST party
export function post_party_api(action) {
    return axios
        .post(BASE_URL + POST_PARTY_URL, action.payload)
        .then((res) => {
            console.log(res, 'from post party api');
            const data = res.data;
            const status = res.status;
            return { data, status };
        })
        .catch((err) => {
            console.log(err);
        })
}
// DELETE party
export function delete_party_api(action) {
    return axios
        .delete(BASE_URL + DELETE_PARTY_URL + action.payload._id)
        .then((res) => {
            console.log(res, 'from post party api');
            const data = action.payload._id;
            const status = res.status;
            return { data, status };
        })
        .catch((err) => {
            console.log(err);
        })
}
