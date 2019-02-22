import React, {Component} from 'react';
import { connect } from 'react-redux';
import { reduxForm } from "redux-form";
import { createSubforum } from "../actions";

class SubforumForm extends Component{

    render(){

        const { fields: {title, content}, handleSubmit } = this.props;

        return(
            <form onSubmit={ handleSubmit(this.props.createSubforum) }>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                </div>

                <div className="form-group">
                    <label>Kątent</label>
                    <input type="text" className="form-control" {...content} />
                </div>

                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        );
    }
}



export default reduxForm({
    form: 'SubforumNewForm',
    fields: ['title', 'id']
})(
    connect(null, { createSubforum })(SubforumForm)
);