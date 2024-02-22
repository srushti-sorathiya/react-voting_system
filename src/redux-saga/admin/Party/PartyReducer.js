import { GET_ELECTION_PROGRESS } from "../Election/ElectionAction";
import {GET_PARTY_PROGRESS, GET_PARTY_ERROR, GET_PARTY_SUCCESS, POST_PARTY_ERROR, POST_PARTY_PROGRESS, POST_PARTY_SUCCESS, DELETE_PARTY_ERROR, DELETE_PARTY_SUCCESS } from "./PartyAction";

const initialState = {
    data: [],
    isLoading: false,
    isError: null,
}

const partyReducer = (state = { ...initialState }, action) => {
    console.log(action, 'from party reducer');

    switch (action.type) {
        case GET_PARTY_PROGRESS: {
            return {
                ...state,
                isLoading: true,
                isError: null,
            }
        }
        case GET_PARTY_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: null,
                data: action.data.Data
            }
        }
        case GET_PARTY_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: action.data
            }
        }
        case POST_PARTY_PROGRESS: {
            return {
                ...state,
                isLoding: true,
                isError: null,
            }
        }
        case POST_PARTY_SUCCESS:{
            return {
                ...state,
                isLoding: false,
                data: state.data.concat(action.data.Data),
                isError: null,
            };
        }
        case POST_PARTY_ERROR:
           {
                return {
                    ...state,
                    isLoding: false,
                    isError: action.payload,
                };
           }
        case DELETE_PARTY_ERROR:{
            return {
                ...state,
                isLoading: true,
                isError: null,
            }  
        } 
        case DELETE_PARTY_SUCCESS:{
            return {
                ...state,
                isLoading: false,
                data: state.data.filter((val) => val._id !== action.data),
                isError: null,
            }
        }
        case DELETE_PARTY_ERROR:{
            return {
                ...state,
                isLoading: false,
                isError: action.data
            }    
        }
         default:
            return state;
    }
}

export default partyReducer