import React from "react";
import {Field, reduxForm} from "redux-form";
import s from "./login.module.css";
import {LogIn} from "../../state/auth-reducer";
import {connect} from "react-redux";
import {ProfileRedirect} from "../../hoc/profileRedirect";
import {compose} from "redux";
import {FieldCreator, Input} from "../../helpers/fieldCreator";

const required = value => value ? undefined : 'Field is required';
const maxLength = maxLength => value => value && value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined;
const maxLength20 = maxLength(20);
const maxLength40 = maxLength(40);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {FieldCreator("Login", "email", [required, maxLength20], Input)}
            {FieldCreator("Password", "password", [required, maxLength40], Input, true)}
            <Field component="input" name="rememberMe" type="checkbox"/>Remember me
            <div>
                <button className={s.button_log} type="submit">Login</button>
            </div>
            <div>
                {props.error}
            </div>
        </form>
    )
}
const ReduxLoginForm = reduxForm({form: "login"})(LoginForm);
const Login = (props) => {
    const onSubmit = (formData) => {
        props.LogIn(formData.email, formData.password, formData.rememberMe);
    }
    return <div className={s.body}>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.loginPage.isAuth
})
export default compose(ProfileRedirect, connect(mapStateToProps, {LogIn}))(Login);