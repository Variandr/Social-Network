import s from "../Content/Login/login.module.css";
import React, {useState} from "react";
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

export const FieldCreator = (placeholder, name, validate, component, pass = false, props = {}, text = "") => {
    let [isVisible, setVisibility] = useState(false);
    const showPassword = () => setVisibility(true);
    const hidePassword = () => setVisibility(false);
    return <div className={s.group}>
        {pass ? <div>
                <Field component={component} name={name} placeholder={placeholder}
                       type={isVisible ? "text" : "password"}
                       validate={validate}/>
                {pass && <div className={s.visibilityBtn}>
                    {isVisible ? <div onClick={hidePassword}><AiFillEyeInvisible/></div> :
                        <div onClick={showPassword}><AiFillEye/></div>}
                </div>}
            </div>
            : <Field component={component} name={name} placeholder={placeholder} {...props}
                     validate={validate}/>}{text}
    </div>
}

export const Input = (props) => {
    const {input, meta: {error, touched}, child, ...restProps} = props;
    const hasError = touched && error;
    return <RenderField {...props}><input  className={hasError ? s.error : s.input} {...input} {...restProps}/></RenderField>
}