import axios from "axios";

export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";

export const getSmurfs = () => dispatch => {
    console.log("getSmurfs is firing!");
    dispatch({type: FETCH_SMURFS});   
    axios.get(`http://localhost:3333/smurfs`)
    .then(res => dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_SMURFS_FAIL, payload: err}));
};