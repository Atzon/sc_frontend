import axios from 'axios';
import Users from "../reducers/users_reducer";
import Topics from "../reducers/topic_reducer";
import Subforums from "../reducers/subforum_reducer";

export const FETCH_FORUM = "FETCH_FORUM";
export const FETCH_TOPIC = "FETCH_TOPIC";
export const FETCH_SUBFORUM = "FETCH_SUBFORUM";
export const TOPIC_SELECTED = 'TOPIC_SELECTED';
export const SUBFORUM_SELECTED = 'SUBFORUM_SELECTED';
export const USER_SELECTED = 'USER_SELECTED';
export const CREATE_SUBFORUM = 'CREATE_SUBFORUM';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const FORUM_ID = '?key=fhdbfh23232d2j23';

export function fetchForum(){

    const request = axios.get(`${ROOT_URL}/posts${FORUM_ID}`);

    return {
        type: FETCH_FORUM,
        payload: request
    };
}

export function loadTopic(topicId){

    var topic = Topics().find(x => x.id === topicId);

    return {
        type: FETCH_TOPIC,
        payload: topic
    }
}

export function loadSubforum(subforumId){
    var subforum = Subforums().find(x => x.id === subforumId);

    return {
        type: FETCH_SUBFORUM,
        payload: subforum
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

export function loadUser(userId){
    console.log("User was selected", userId);
    var user = Users().find(x => x.id === userId);
    return {
        type: USER_SELECTED,
        payload: user
    }
}

export function createSubforum(prop) {
    //const request = axios.post("");
    var request = {title: "ok", content: "content"};

    console.log(prop);
    return{
      type: CREATE_SUBFORUM,
      payload: request
    };
    
}