import s from "../Content/Login/login.module.css";
import React from "react";
import {Field} from "redux-form";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/all";

const RenderField = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const FieldCreator = (placeholder, name, validate, component, pass = false, isVisible = false, showPass, hidePass, props = {}, text = "") => {
    if (pass) {
        return (
            <div className={s.group}>
                <Field component={component} name={name} placeholder={placeholder}
                       type={isVisible ? "text" : "password"}
                       validate={validate}/>
                <div className={s.visibilityBtn}>
                    {isVisible ? <div onClick={hidePass}><AiFillEyeInvisible/></div> :
                        <div onClick={showPass}><AiFillEye/></div>}
                </div>
            </div>
        )
    }
    return (
        <div className={s.group}>
            <Field component={component} name={name} placeholder={placeholder} {...props}
                   validate={validate}/>{text}
        </div>
    )
}

export const Input = (props) => {
    const {input, meta: {error, touched}, child, ...restProps} = props;
    const hasError = touched && error;
    return <RenderField {...props}><input
        className={hasError ? s.error : s.input} {...input} {...restProps}/></RenderField>
}