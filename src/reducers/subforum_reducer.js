import { CREATE_SUBFORUM } from "../actions";

var db = [
    {id: 1, content: "Jakies 1", topics:
            [{id: 1, title: "Tytul temat 1", authorId:1},
                {id: 2, title: "Tytul temat 2", authorId: 2},
                {id: 3, title: "Tytul temat 3", authorId: 3}]},
    {id: 2, content: "Blablabla", topics:
            [{id: 4, title: "Tytul temat 4", authorId:2},
                {id: 5, title: "Tytul temat 5", authorId: 2},
                {id: 6, title: "Tytul temat 6", authorId: 3}]},
    {id: 3, content: "fjnwkfewf", topics:
            [{id: 7, title: "Tytul temat 7", authorId:1},
                {id: 8, title: "Tytul temat 8", authorId: 1}]},
    {id: 4, content: "Hahhaha", topics:
            [{id: 9, title: "Tytul temat 9", authorId:3},
                {id: 10, title: "Tytul temat 10", authorId: 2},
                {id: 11, title: "Tytul temat 11", authorId: 1}]},
    {id: 5, content: "Dudadada", topics:
            [{id: 12, title: "Tytul temat 12", authorId:1}]}];

export default function (state = db, action) {
    if(action){
        switch(action.type){
            case CREATE_SUBFORUM:
                return [ action.payload, ...state];
        }
    }
    return state;
}