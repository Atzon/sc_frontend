import { FETCH_FORUM } from "../actions";


const INITIAL_STATE = {all: [], forum: null };

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_FORUM:
            return {...state, all:action.payload.data };
        default:
            return state;
    }
}