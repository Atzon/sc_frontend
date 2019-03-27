import React from 'react';
import 'antd/dist/antd.css';
import '../../App.css';
import AntLayout from "../layout/ant_layout";
import {Link} from "react-router-dom";


class Adminpanel extends React.Component {

    render() {
        return (
            <AntLayout>
                <div>
                    <Link to={`${this.props.match.url}/managesubforum`} className="btn btn-primary">Manage subforum</Link>
                    <Link to={`${this.props.match.url}/manageuser`} className="btn btn-primary">Manage user</Link>
                </div>
            </AntLayout>
        );
    }
}

export default Adminpanel;

