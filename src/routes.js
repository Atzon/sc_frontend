import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "./components/App";
import SubforumList from "./components/SubforumList";
import Subforum from "./components/Subforum";
import SubforumForm from "./components/SubforumForm";
import Topic from "./components/Topic";
import User from "./components/User";
import Login from "./components/login";
import Adminpanel from "./components/admin/adminpanel";
import Managesubforum from "./components/admin/manageSubforum";
import Manageuser from "./components/admin/manageUser";
export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/home" component={SubforumList}/>
            <Route exact path="/home/new" component={SubforumForm}/>
            <Route exact path="/home/:subforumId" component={Subforum}/>
            <Route exact path="/home/new" component={SubforumForm}/>
            <Route exact path="/home/topic/:topicId" component={Topic}/>
            <Route exact path="/home/user/:userId" component={User}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/admin" component={Adminpanel}/>
            <Route exact path="/admin/managesubforum" component={Managesubforum}/>
            <Route exact path="/admin/manageuser" component={Manageuser}/>
        </Switch>
    </BrowserRouter>
);