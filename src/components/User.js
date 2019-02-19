import React, {Component} from 'react';
import {connect} from 'react-redux';

class User extends Component{
    render(){

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

export default connect(mapStateToProps)(User)