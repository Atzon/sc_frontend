import React, {Component} from 'react';
import SubforumList from "./SubforumList";
// import { connect } from 'react-redux';
// import { fetchForum} from "../actions";

export default class Homepage extends Component {
    // componentWillMount() {
    //     this.props.fetchForum();
    // }

    render() {
        return (
            <div>
                <SubforumList/>
            </div>
        );
    }
}


//export default connect(null, {fetchForum})(dupa);
