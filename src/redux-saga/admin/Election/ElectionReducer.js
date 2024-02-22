import { act } from "react-dom/test-utils";
import { DELETE_ELECTION_ERROR, DELETE_ELECTION_PROGRESS, DELETE_ELECTION_SUCCESS, GET_ELECTION_ERROR, GET_ELECTION_PROGRESS, GET_ELECTION_SUCCESS, POST_ELECTION_ERROR, POST_ELECTION_PROGRESS, POST_ELECTION_SUCCESS } from "./ElectionAction";
import { isEditable } from "@testing-library/user-event/dist/utils";

const initialState = {
    data: [],
    isLoading: false,
    isError: null,
};
const electionReducer = (state = { ...initialState }, action) => {
    console.log(action, 'action from reducer');
    switch (action.type) {
        case GET_ELECTION_PROGRESS:
            return {
                ...state,
                isLoading: true,
                isError: null,
            }
        case GET_ELECTION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.data.Data,
                isError: null,
            }
        case GET_ELECTION_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: action.data,
            }
        case POST_ELECTION_PROGRESS:
            return {
                ...state,
                isLoading: true,
                isError: null
            }
        case POST_ELECTION_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: state.data.concat(action.data.Data),
                isError: null
            }
        }
        case POST_ELECTION_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: action.payload
            }
        }
        case DELETE_ELECTION_PROGRESS: {
            return {
                ...state,
                isLoading: true,
                isError: null,
            }
        }
        case DELETE_ELECTION_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: state.data.filter((val) => val._id !== action.data),
                isError: null
            }
        }
        case DELETE_ELECTION_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: action.payload
            }
        }
        default: {
            return { ...state }
        }
    }
}

export default electionReducer;