import {ADD_POST, FETCH_TOPIC} from "../actions";

var db = [
    {id: 1, subforumId: 1, title: "Tytul temat 1", authorId: 1, posts:[
            {id:1, content: "Poscik 1", authorId:1, date: 'datka'},
            {id:2, content: "Poscik 2", authorId:3, date: 'datka'},
            {id:3, content: "Poscik 3", authorId:2, date: 'datka'},
            {id:4, content: "Poscik 4", authorId:1, date: 'datka'}], page:1},
    {id: 2, subforumId: 1, title: "Tytul temat 2", authorId: 2, posts:[
            {id:5, content: "Poscik 5", authorId:1, date: 'datka'},
            {id:6, content: "Poscik 6", authorId:3, date: 'datka'}], page:1},
    {id: 3, subforumId: 1, title: "Tytul temat 3", authorId: 3, posts:[
            {id:7, content: "Poscik 7", authorId:2, date: 'datka'}], page:1},
    {id: 4, subforumId: 2, title: "Tytul temat 4", authorId: 2, posts:[
            {id:8, content: "Poscik 8", authorId:3, date: 'datka'},
            {id:9, content: "Poscik 9", authorId:2, date: 'datka'},
            {id:10, content: "Poscik 10", authorId:2, date: 'datka'}], page:1},
    {id: 5, subforumId: 2, title: "Tytul temat 5", authorId: 2, posts:[
            {id:11, content: "Poscik 11", authorId:1, date: 'datka'},
            {id:12, content: "Poscik 12", authorId:2, date: 'datka'}], page:1},
    {id: 6, subforumId: 2, title: "Tytul temat 6", authorId: 1, posts:[
            {id:13, content: "Poscik 13", authorId:1, date: 'datka'},
            {id:14, content: "Poscik 14", authorId:3, date: 'datka'},
            {id:15, content: "Poscik 15", authorId:1, date: 'datka'}], page:1},
    {id: 7, subforumId: 3, title: "Tytul temat 7", authorId: 3, posts:[
            {id:16, content: "Poscik 16", authorId:1, date: 'datka'},
            {id:17, content: "Poscik 17", authorId:3, date: 'datka'}], page:1},
    {id: 8, subforumId: 3, title: "Tytul temat 8", authorId: 1, posts:[
            {id:18, content: "Poscik 18", authorId:3, date: 'datka'},
            {id:19, content: "Poscik 19", authorId:2, date: 'datka'}], page:1},
    {id: 9, subforumId: 4, title: "Tytul temat 9", authorId: 2, posts:[
            {id:20, content: "Poscik 20", authorId:2, date: 'datka'}], page:1},
    {id: 10, subforumId: 5, title: "Tytul temat 10", authorId: 1, posts:[
            {id:21, content: "Poscik 21", authorId:3, date: 'datka'}], page:1},
    {id: 11, subforumId: 5, title: "Tytul temat 11", authorId: 1, posts:[
            {id:22, content: "Poscik 22", authorId:1, date: 'datka'},
            {id:23, content: "Poscik 23", authorId:2, date: 'datka'}], page:1}];

export default function (state = db, action) {
    if(action){
        switch(action.type){
            case FETCH_TOPIC:
                console.log(action);
                return action.payload;
            case ADD_POST:
                // console.log(action);
                return state;
                // return { ...state.map((topic) => topic.id === action.topic.id ? {
                //     ...topic, posts: [...topic.posts, action.payload]
                //     } : topic)};
        }
    }
    return state;
}