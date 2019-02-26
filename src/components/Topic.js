import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addPost, loadTopic} from "../actions";
import {Col, Container, Row} from "react-grid-system";
import {marginRowTop} from "../utils";
import {Editor} from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {Field, reduxForm} from "redux-form";
import { EditorFieldComponent } from "./WYSWIGField";


const authorColumn = {
    borderRightColor: 'rgb(221,221,221)',
    borderRightStyle: 'solid',
    borderRightWidth: '1px'
}

const wyswigStyle = {
    paddingTop: '10%',
    marginBottom: '100px'
}


class Topic extends Component{

    componentDidMount() {
        this.props.loadTopic(parseInt(this.props.match.params.topicId));
    }

    render(){
        const { handleSubmit } = this.props;

        if(!this.props.topic){

            return(
                <div>
                    <h3>Loading</h3>
                </div>);
        }

        return(
            <div>
                <Container>
                    <Row style={marginRowTop} className="list-group-item">
                        <Col>
                            {this.props.topic.title}
                        </Col>
                    </Row>
                    { this.props.topic.posts.map((post) =>
                        <Row key={post.id} className="list-group-item">
                            <Col md={2} style={authorColumn}>
                                author
                            </Col>
                            <Col>
                                {post.content}
                            </Col>
                        </Row>
                    )
                    }
                    <Row style={wyswigStyle}>
                        <form onSubmit={handleSubmit(this.props.addPost)}>

                            <Field key="field"
                                   name="editorText"
                                   id="inputEditorText"
                                   disabled={false}
                                   placeholder="Type here" component={EditorFieldComponent} />

                            <button type="submit">Add post</button>
                        </form>
                    </Row>
                </Container>
            </div>

        );
    }
}

function mapStateToProps(state){
    return{
        topic: state.activeTopic
    };
}

export default connect(mapStateToProps, { loadTopic, addPost })(
    reduxForm({form: "AddPostForm"})(Topic));

