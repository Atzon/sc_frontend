import axios from 'axios';
import Users from "../reducers/users_reducer";
import Topics from "../reducers/topic_reducer";

export const FETCH_FORUM = "FETCH_FORUM";
export const TOPIC_SELECTED = 'TOPIC_SELECTED';
export const SUBFORUM_SELECTED = 'SUBFORUM_SELECTED';
export const USER_SELECTED = 'USER_SELECTED';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const FORUM_ID = '?key=fhdbfh23232d2j23';

export function fetchForum(){

    const request = axios.get(`${ROOT_URL}/posts${FORUM_ID}`);

    return {
        type: FETCH_FORUM,
        payload: request
    };
}

export function selectSubforum(subforum) {
    console.log("Subforum was selected", subforum.content);
    return {
        type: SUBFORUM_SELECTED,
        payload: subforum
    };
}

export function selectTopic(topic){
    return {
        type: TOPIC_SELECTED,
        payload: topic
    }
}

export function selectUser(userId){
    console.log("User was selected", userId);
    var user = Users().find(x => x.id === userId);
    return {
        type: USER_SELECTED,
        payload: user
    }
}