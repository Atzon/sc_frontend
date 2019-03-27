import React from 'react';
import {Button, Checkbox, Col, Icon, Input, Row} from 'antd';
import 'antd/dist/antd.css';
import '../App.css';
import AntLayout from "./layout/ant_layout";
import {connect} from 'react-redux';
import {Field, reduxForm} from "redux-form";
import {login} from "../actions";

const Prefix = ({type, style}) =>{
    return(
        <Icon type={type} style={style} />
    );
};

const Text = ({ label, input, type, iconType, iconStyle }) => {
    return (
        <Input {...input} type={type} placeholder={label} prefix={<Prefix type={iconType} style={iconStyle}/>} />
    );
};
const FormCheckbox =({input}) =>{
    return(
        <Checkbox {...input} >Remember me</Checkbox>
    );
};




class Login extends React.Component {

    render() {
        const { handleSubmit } = this.props;
        return (
            <AntLayout>
            <Row align={"middle"}>
                <Col align={"middle"}>
                    <form onSubmit={handleSubmit(this.props.login)} style={{width: "300px"}}>
                        <Field name="username"
                               label="Username"
                               iconType="user"
                               iconStyle={{ color: 'rgba(0,0,0,.25)' }}
                               component={Text}
                               type="text"
                        />
                        <Field name="password"
                               label="Password"
                               iconType="lock"
                               iconStyle={{ color: 'rgba(0,0,0,.25)' }}
                               component={Text}
                               type="password"
                        />
                        <Field name="remember" component={FormCheckbox} type="checkbox"/>
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </form>
                </Col>
            </Row>
            </AntLayout>
        );
    }
}

export default connect(null, { login })(
    reduxForm({form: "LoginForm"})(Login));

