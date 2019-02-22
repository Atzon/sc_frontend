import { FETCH_SUBFORUM, SUBFORUM_SELECTED } from "../actions";

export default function(state = null, action){
    switch(action.type){
        case FETCH_SUBFORUM:
            return action.payload;
        case SUBFORUM_SELECTED:
            return action.payload;
    }

    return state;
}