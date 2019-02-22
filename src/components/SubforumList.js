import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSubforum, selectTopic, selectUser} from "../actions";
import {Link} from "react-router-dom";
import { Button } from 'reactstrap';


export class SubforumList extends Component {

    renderTopics(subforum){
        return subforum.topics.map((topic) => {
           return (
               <li key={topic.id}
                   className="list-group-item">
                   <Link onClick={() => this.props.selectTopic(topic)}
                         to={`${this.props.match.url}/topic/${topic.id}`}>
                       {topic.title}</Link>
                   <br/>
                   <Link onClick={() => this.props.selectUser(topic.authorId)}
                         to={`${this.props.match.url}/user/${topic.authorId}`}>
                       Author {topic.authorId}</Link>
               </li>
        );
        });
    }

    render(){
        return (
            <div>
                <ul className="list-group col-sm-4">
                    { this.props.subforums.map((subforum) =>
                        <li key={subforum.id}
                            onClick={() => this.props.selectSubforum(subforum)}
                            className="list-group-item">
                            <Link to={`${this.props.match.url}/${subforum.id}`}>{subforum.content}</Link>
                            <Button color="primary" href={`${this.props.match.url}/new`} size="sm">Add new subforum</Button>
                            <ul>
                                {this.renderTopics(subforum)}
                            </ul>
                        </li>
                    )
                    }
                </ul>
                <hr />
            </div>
        )
    }
}



//
// class SubforumList extends Component{
//
//     renderList(){
//         return this.props.subforums.map((subforum) => {
//            return (
//                <li key={subforum.id}
//                    onClick={() => this.props.selectSubforum(subforum)}
//                    className="list-group-item">
//                    <Link to={`subforum/${subforum.id}`}>{subforum.content}</Link>
//                </li>
//
//
//         );
//         });
//     }
//
//
//     render(){
//         return(
//             <div>
//                 <ul className="list-group col-sm-4">
//                     {this.renderList()}
//                 </ul>
//                 <Route path={`/subforum/1`} component={Test}/>
//             </div>
//         );
//     }
//
// }

const Test = ({ match }) => (

    <div>
        <h1>TEST</h1>
        <h1>{match.params.subforumId}</h1>
    </div>

);

function mapStateToProps(state){
    return{
      subforums: state.subforums
    };
}

export default connect(mapStateToProps, {selectSubforum, selectTopic, selectUser})(SubforumList);















