import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadSubforum, loadTopic, loadUser} from "../actions";
import {Link} from "react-router-dom";
import {Col, Container, Row} from "react-grid-system";

const marginRowTop = {
    marginTop: '50px',
    backgroundColor: '#BCC9D3'
};

const marginRowBottom = {
    marginBottom: '50px',
}

const displayFlexDisable ={
    display: 'yes'
}
const backgroundColor ={
    backgroundColor: '#E8E8E8'
}
export class SubforumList extends Component {

    renderTopics(subforum){
        return(
            <Container style={marginRowBottom}>
                { subforum.topics.map((topic) =>
                    <Row key={topic.id} style={ backgroundColor }
                         className="list-group-item">
                        <Col md={8}>
                            <Link onClick={() => this.props.loadTopic(topic.id)}
                                    to={`${this.props.match.url}/topic/${topic.id}`}>
                                {topic.title}
                            </Link>
                        </Col>
                        <Col>
                            <Link onClick={() => this.props.loadUser(topic.authorId)}
                                  to={`${this.props.match.url}/user/${topic.authorId}`}>
                                Author {topic.authorId}
                            </Link>
                        </Col>
                    </Row>
                    )}
                </Container>
        );

    }

    render(){
        return (
            <div>
                <Container>
                    { this.props.subforums.map((subforum) =>
                        <div>
                            <Row key={subforum.id} style={marginRowTop}
                                 onClick={() => this.props.loadSubforum(subforum.id)}
                                 className="list-group-item">
                                <Col md={8} xs={8}>
                                    <Link to={`${this.props.match.url}/${subforum.id}`}>{subforum.content}</Link>
                                </Col>
                                <Col>
                                    <Link to={`${this.props.match.url}/new`} className="btn btn-primary">Add new subforum</Link>
                                </Col>

                            </Row>
                            <Row style={displayFlexDisable}>
                                {this.renderTopics(subforum)}
                            </Row>
                        </div>
                    )
                    }
                </Container>
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



function mapStateToProps(state){
    return{
      subforums: state.subforums
    };
}

export default connect(mapStateToProps, {loadSubforum, loadTopic, loadUser})(SubforumList);















