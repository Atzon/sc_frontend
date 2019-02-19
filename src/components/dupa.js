import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchForum} from "../actions";

class dupa extends Component {
    componentWillMount() {
        this.props.fetchForum();
    }

    render() {
        return (
            <div>List of forums:</div>
        );
    }
}


export default connect(null, {fetchForum})(dupa);
