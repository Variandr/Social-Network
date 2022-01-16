import React, {useState} from "react";
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
    let [isVisible, setVisibility] = useState(false);
    const showPass = () => setVisibility(true)
    const hidePass = () => setVisibility(false)
    return (
        <form onSubmit={props.handleSubmit}>
            {FieldCreator("Login", "email", [required, maxLength20], Input)}
            {FieldCreator("Password", "password", [required, maxLength40], Input, true,
                isVisible, showPass, hidePass
            )}
            <Field component="input" name="rememberMe" type="checkbox"/>Remember me
            {props.captcha && <img alt="captcha" src={props.captcha}/>}
            {props.captcha && FieldCreator("Input text from image", "captcha", [required], Input)}
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
        props.LogIn(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    return <div className={s.body}>
        <ReduxLoginForm captcha={props.captcha} onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => ({
    captcha: state.loginPage.captcha
})
export default compose(ProfileRedirect, connect(mapStateToProps, {LogIn}))(Login);