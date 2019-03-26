import React, {Component} from 'react';
import SubforumList from "./SubforumList";
import AntLayout from "./layout/ant_layout";
// import { connect } from 'react-redux';
// import { fetchForum} from "../actions";

export default class Homepage extends Component {
    // componentWillMount() {
    //     this.props.fetchForum();
    // }

    render() {
        return (
            <div>
                <AntLayout>
                    <SubforumList/>
                </AntLayout>
            </div>
        );
    }
}


//export default connect(null, {fetchForum})(dupa);
