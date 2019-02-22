import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadSubforum, loadUser, loadTopic } from "../actions";
import {Link} from "react-router-dom";

class Subforum extends Component{

    componentDidMount() {
        this.props.loadSubforum(parseInt(this.props.match.params.subforumId));
    }

    render(){

        if(!this.props.subforum){
            return(
                <div>
                    Blablah
                </div>);
        }

        return this.props.subforum.topics.map((topic) => {
            return (
                <li key={topic.id}
                    className="list-group-item">
                    <Link onClick={() => this.props.loadTopic(topic.id)}
                          to={`topic/${topic.id}`}>
                        {topic.title}</Link>
                    <br/>
                    <Link onClick={() => this.props.loadUser(topic.authorId)}
                          to={`user/${topic.authorId}`}>
                        Author {topic.authorId}</Link>
                </li>
            );
        });

    }
}

function mapStateToProps(state){
    return{
      subforum: state.activeSubforum
    };
}

export default connect(mapStateToProps, { loadSubforum, loadUser, loadTopic })(Subforum)