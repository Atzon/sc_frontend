import React, {Component} from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from "redux-form";
import { createSubforum } from "../actions";
import { renderField, required, alphaNumeric } from "../utils";


class SubforumForm extends Component{

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.props.createSubforum)}>
                <Field name="title" type="text" component={renderField} label="Title" validate={[required]}/>
                <Field name="authorId" type="text" component={renderField} label="AuthorId" validate={[required]}/>


                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default connect(null, { createSubforum })(
    reduxForm({form: "SubforumAddForm"})(SubforumForm));



//class SubforumForm extends Component{
//
//}
//
//     handleFormSubmit(formProps){
//         console.log(formProps.title);
//         this.props.createSubforum(formProps)
//     }
//
//     render(){
//
//         const { fields: {title, content}, handleSubmit } = this.props;
//
//         return(
//             <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
//                 <div className="form-group">
//                     <label>Title</label>
//                     <input type="text" className="form-control" {...title} />
//                 </div>
//
//                 <div className="form-group">
//                     <label>Kątent</label>
//                     <input type="text" className="form-control" {...content} />
//                 </div>
//
//                 <button type="submit" className="btn btn-primary">Save</button>
//             </form>
//         );
//     }
// }
//
// const form = reduxForm({
//     form: 'PostsNewForm',
//     fields: ["title", "content"]
// });
//
// export default connect(null, { createSubforum })(form(SubforumForm));