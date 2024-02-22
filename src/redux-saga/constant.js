// ============= BASE_API ROUTE ==============
// export const BASE_URL = "http://52.65.47.180:4000/v1";
export const BASE_URL = "https://voater-backend-app.onrender.com/v1";

// ============== LOGIN ROUTE ================
export const LOGIN_URL = "/login";

//  ============== ELECTION ROUTE ===============
export const GET_ELECTION_URL = "/elelist"
export const POST_ELECTION_URL = "/ele"
export const UPDATE_ELECTION_URL = "/eleup/"  //+id
export const DELETE_ELECTION_URL = "/eledel/"  //+id

// ============== PARTY ROUTE ===============
export const GET_PARTY_URL = "/pList"
export const POST_PARTY_URL = "/party"
export const DELETE_PARTY_URL = "/pdel/" //+_id
export const UPDATE_PARTY_URL = "/pup/" //+_id

// ============= USER ROUTE ================
export const GET_USER_URL = "/authlist"
export const POST_USER_URL = "/auth"
export const DELETE_USER_URL = "/authdel/" //+_id
export const UPDATE_USER_URL = "/authup/" //+_id

// ============ PARTY_CONNECTION ROUTE ================
export const GET_PARTY_CONNECTION_URL = "/plistall"
export const POST_PARTY_CONNECTION_URL = "/plist"
export const DELETE_PARTY_CONNECTION_URL = "/plistdel/"

// ============ VOTE ROUTE ===============
export const GET_VOTE_URL = "/vlist"
export const POST_VOTE_URL = "/vote"
export const DELETE_VOTE_URL = "/vdel/" 