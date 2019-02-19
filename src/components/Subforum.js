import React, { Component } from 'react';
import { connect} from 'react-redux';
import {Route} from "react-router-dom";

class Subforum extends Component{
    render(){

        return(
            <div>
                Subforum site
                <h3>
                    {this.props.subforum.content}
                    <br/>
                    {this.props.match.params.subforumId}
                </h3>

            </div>
        );
    }
}

function mapStateToProps(state){
    return{
      subforum: state.activeSubforum
    };
}

export default connect(mapStateToProps)(Subforum)