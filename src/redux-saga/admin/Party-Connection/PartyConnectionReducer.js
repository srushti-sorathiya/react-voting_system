import { DELETE_PARTY_CONNECTION_ERROR, DELETE_PARTY_CONNECTION_PROGRESS, DELETE_PARTY_CONNECTION_SUCCESS, GET_PARTY_CONNECTION_ERROR, GET_PARTY_CONNECTION_PROGRESS, GET_PARTY_CONNECTION_SUCCESS, POST_PARTY_CONNECTION_ERROR, POST_PARTY_CONNECTION_PROGRESS, POST_PARTY_CONNECTION_SUCCESS } from "./PartyConnectionAction";

const initialState = {
    data: [],
    isLoding: false,
    isError: null,
};

const partyConnectionReducer = (state = {...initialState}, action) => {
    console.log(action, 'action from reducer PC');

    switch(action.type){
        case GET_PARTY_CONNECTION_PROGRESS:
            return{
                ...state,
                isLoading: true,
                isError: null,
            }
        case GET_PARTY_CONNECTION_SUCCESS:
            console.log(action.data);
            return{
                ...state,
                isLoading: false,
                data: action.data,
                isError: null,
            }
        case GET_PARTY_CONNECTION_ERROR:
          return{
                ...state,
                isLoading: false,
                isError: action.data
          }
        case POST_PARTY_CONNECTION_PROGRESS:{
            return {
                ...state,
                isLoading: true,
                isError: null,
            }
          }
        case POST_PARTY_CONNECTION_SUCCESS:{
            return {
                ...state,
                isLoading: false,
                data: state.data.concat(action.data.Data),
                isError: null,
            };
          }
        case POST_PARTY_CONNECTION_ERROR:{
            return {
                ...state,
                isLoading: false,
                isError: action.data,
            };
          }
        case DELETE_PARTY_CONNECTION_PROGRESS:{
            return {
                ...state,
                isLoading: true,
                isError: null,
            };
          }
        case DELETE_PARTY_CONNECTION_SUCCESS:{
            const filterConnect = state.data.filter((val) => val._id !== action.data);
            return {
                ...state,
                isLoading: false,
                data: filterConnect,
                isError: null,
            };
        }
        case DELETE_PARTY_CONNECTION_ERROR:{
            return {
                ...state,
                isLoading: false,
                isError: action.data,
            }; 
        }
          default:{
            return{
                ...state
            }
          }
    }
}

export default partyConnectionReducer