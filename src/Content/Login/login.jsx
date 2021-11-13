import React from "react";
import {Field, reduxForm} from "redux-form";
import s from "./login.module.css";

const renderField = ({input, label, type, meta}) => {
    return <div>
        <div>
            <input className={meta.touched && meta.error ? s.error : s.input} {...input} placeholder={label} type={type}/>
            {meta.touched && ((meta.error && <span>{meta.error}</span>) || (meta.warning && <span>{meta.warning}</span>))}
        </div>
    </div>
}
const required = value => value ? undefined : 'Field is required';
const maxLength = maxLength => value => value && value.length > maxLength ?`Max length is ${maxLength} symbols` : undefined;
const maxLength20 = maxLength(20);
const maxLength40 = maxLength(40);
const submitting = () => {

}
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h1 className={s.form_name}>Login</h1>
            <div className={s.group}>
                <Field className={s.input} component={renderField} name="login" placeholder="Login" label="Login"
                       validate={[required, maxLength20]}/>
            </div>
            <div className={s.group}>
                <Field className={s.input} component={renderField} name="password" placeholder="Password" label="Password"
                      validate={[required, maxLength40]}/>
            </div>
            <div>
                <Field component="input" name="rememberMe" type="checkbox"/>Remember me
            </div>
            <div>
                <button className={s.button_log} type="submit" disabled={submitting}>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({form: "login"})(LoginForm);
const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return <div className={s.body}>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}
export default Login;