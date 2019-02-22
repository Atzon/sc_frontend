import React, {Component} from 'react';
import {connect} from 'react-redux';
import { loadTopic } from "../actions";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

class Topic extends Component{


    componentDidMount() {
        this.props.loadTopic(parseInt(this.props.match.params.topicId));
    }

    render(){

        if(!this.props.topic){

            return(
                <div>
                    Blablah
                </div>);
        }

        return(
            <div>
                <ul className="list-group col-sm-4">
                    { this.props.topic.posts.map((post) =>
                        <li key={post.id}
                            // onClick={() => this.props.selectSubforum(subforum)}
                            className="list-group-item">
                            {post.content}
                            {/*<Link to={`${this.props.match.url}/${subforum.id}`}>{subforum.content}</Link>*/}
                            {/*<Button color="primary" href={`${this.props.match.url}/new`} size="sm">Add new subforum</Button>*/}

                        </li>
                    )
                    }
                </ul>
                <hr />
            </div>

        );
    }
}

function mapStateToProps(state){
    return{
        topic: state.activeTopic
    };
}

export default connect(mapStateToProps, { loadTopic })(Topic)