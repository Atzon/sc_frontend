import React, {Component} from 'react';
import {connect} from 'react-redux';
import { loadUser } from "../actions";

class User extends Component{

    componentDidMount() {
        this.props.loadUser(parseInt(this.props.match.params.userId));
    }

    render(){
        if(!this.props.user){

            return(
                <div>
                    Blablah
                </div>);
        }


        return(
            <div>
                <h3>
                    {this.props.user.id}
                    <br/>
                    {this.props.user.name}
                </h3>

            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        user: state.activeUser
    };
}

export default connect(mapStateToProps, { loadUser })(User)