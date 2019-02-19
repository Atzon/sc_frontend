import { combineReducers } from 'redux';
import ForumReducer from './reducer_forum';
import SubforumReducer from './subforum_reducer';
import ActiveSubforum from './active_subforum_reducer';
import ActiveTopic from './active_topic_reducer';
import ActiveUser from "./active_user_reducer";

const rootReducer = combineReducers({
    forum: ForumReducer,
    subforums: SubforumReducer,
    activeSubforum: ActiveSubforum,
    activeTopic: ActiveTopic,
    activeUser: ActiveUser
});

export default rootReducer;