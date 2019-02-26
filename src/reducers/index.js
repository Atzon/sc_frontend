import { combineReducers } from 'redux';
import ForumReducer from './reducer_forum';
import SubforumReducer from './subforum_reducer';
import ActiveSubforum from './active_subforum_reducer';
import ActiveTopic from './active_topic_reducer';
import ActiveUser from "./active_user_reducer";
import TopicReducer from './topic_reducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    forum: ForumReducer,
    subforums: SubforumReducer,
    activeSubforum: ActiveSubforum,
    activeTopic: ActiveTopic,
    activeUser: ActiveUser,
    topics: TopicReducer,
    form: formReducer
});

export default rootReducer;