import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadSubforum, loadTopic, loadUser} from "../actions";
import {Link} from "react-router-dom";
import {Col, Container, Row} from "react-grid-system";
import {backgroundColor, marginRowTop} from "../utils";
import AntLayout from "./layout/ant_layout";

class Subforum extends Component{

    componentDidMount() {
        this.props.loadSubforum(parseInt(this.props.match.params.subforumId));
    }

    render(){

        if(!this.props.subforum){
            return(
                <div>
                    <h3>Loading</h3>
                </div>);
        }

        return (
            <div>
                <AntLayout>
                <Container>
                    <Row key={this.props.subforum.id} style={marginRowTop}
                         onClick={() => this.props.loadSubforum(this.props.subforum.id)}
                         className="list-group-item">
                        <Col md={8} xs={8}>
                            <Link to={`${this.props.match.url}`}>{this.props.subforum.content}</Link>
                        </Col>
                        <Col>
                            <Link to={`${this.props.match.url}/new`} className="btn btn-primary">Add new subforum</Link>
                        </Col>

                    </Row>
                    { this.props.subforum.topics.map((topic) =>
                        <Row key={topic.id} className="list-group-item" style={ backgroundColor }>
                            <Col>
                                <Link onClick={() => this.props.loadTopic(topic.id)}
                                      to={`topic/${topic.id}`}>
                                    {topic.title}</Link>
                            </Col>
                            <Col>
                                <Link onClick={() => this.props.loadUser(topic.authorId)}
                                      to={`user/${topic.authorId}`}>
                                    Author {topic.authorId}</Link>
                            </Col>
                        </Row>
                    )}
                </Container>
                </AntLayout>
            </div>
        );

    }
}

function mapStateToProps(state){
    return{
      subforum: state.activeSubforum
    };
}

export default connect(mapStateToProps, { loadSubforum, loadUser, loadTopic })(Subforum)