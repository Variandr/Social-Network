import s from "../../Login/login.module.css";
import React from "react";
import {reduxForm} from "redux-form";
import {FieldCreator, Input} from "../../../helpers/fieldCreator";

const ProfileForm = ({handleSubmit, error, profile}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                aboutMe:{FieldCreator("aboutMe", "aboutMe", [], Input)}
                lookingForAJob:{FieldCreator("lookingForAJob", "lookingForAJob", [], Input)}
                lookingForAJobDescription:{FieldCreator("lookingForAJobDescription", "lookingForAJobDescription", [], Input)}
                fullName:{FieldCreator("fullName", "fullName", [], Input)}
                contacts: {Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                    {key}: {FieldCreator(key, "contacts." + key, [], Input)}
                </div>
            })}
                <div>
                    <button className={s.button_log} type="submit">Save</button>
                </div>
                <div>
                    {error}
                </div>
            </div>
        </form>
    )
}
const ReduxProfileForm = reduxForm({form: "profile"})(ProfileForm);
export default ReduxProfileForm;