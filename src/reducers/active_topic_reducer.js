import { FETCH_TOPIC, TOPIC_SELECTED } from "../actions";

export default function(state = null, action){
    switch(action.type){
        case TOPIC_SELECTED:
            return action.payload;
        case FETCH_TOPIC:
            return action.payload;
    }

    return state;
}