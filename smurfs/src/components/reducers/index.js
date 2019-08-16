import { FETCH_SMURFS, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAIL } from '../actions'

const initialState = {
    smurfList: [
        {
            name: "Brainey",
            age: 200,
            height: "5cm",
            id: 0
          },
          
          {
            name: "Brain",
            age: 210,
            height: "7cm",
            id: 1
          }
    ]
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SMURFS:
           return {...state};
        case FETCH_SMURFS_SUCCESS:
           return {
                ...state,
                smurfList: action.payload
        };
        case FETCH_SMURFS_FAIL:
           return {...state};
        default: return state;
    }
};