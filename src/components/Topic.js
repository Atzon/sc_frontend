import React, {Component} from 'react';
import {connect} from 'react-redux';

class Topic extends Component{

    render(){
        return(
            <div>
                Tytul: {this.props.topic.title}
                <br/>
                AuthorId: {this.props.topic.authorId}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        topic: state.activeTopic
    };
}

export default connect(mapStateToProps)(Topic)