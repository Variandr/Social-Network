import React from "react";
import {Field, reduxForm} from "redux-form";
import s from "./login.module.css";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h1 className={s.form_name}>Login</h1>
            <div className={s.group}>
                <Field className={s.input} component={"input"} name={"login"} placeholder={"Login"} />
            </div>
            <div className={s.group}>
                <Field className={s.input} component={"input"} name={"password"} placeholder={"Password"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/>Remember me
            </div>
            <div>
                <button>Login</button>
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