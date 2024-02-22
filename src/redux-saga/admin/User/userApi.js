import axios from "axios";
import { BASE_URL, DELETE_USER_URL, GET_USER_URL, POST_USER_URL } from "../../constant";

// GET user 
export function get_user_api() {
    return axios
        .get(BASE_URL + GET_USER_URL)
        .then((res) => {
            console.log(res, 'res from user api');
            const data = res.data;
            const status = res.status
            return {
                data, status
            }
        }).catch((err) => {
            console.log(err);
        })
}

// POST user 
export function post_user_api(action) {
    return axios.post(BASE_URL + POST_USER_URL, action.payload).then((res) => {
        console.log(res, 'res from user post api');
        const data = res.data;
        const status = res.status
        return {
            data, status
        } 
    }).catch((err) => {
        console.log(err);
    })
}

//  DELETE user
export function delete_user_api(action){
    return axios
    .delete(BASE_URL + DELETE_USER_URL + action.payload._id)
    .then((res) => {
        console.log(res , 'res from delete user api');
        const data = action.payload._id;
        const status = res.status
        return {
            data, status
        } 
    }).catch((err)=> {
        console.log(err);
    })
}