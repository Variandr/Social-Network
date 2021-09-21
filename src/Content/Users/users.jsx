import React from "react";
import s from "./users.module.css"
import axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        axios.get("http://localhost:3001/users")
            .then(response => {
                this.props.getUsers(response.data);
            });
    }

    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div className={s.text}>
                <img alt="ava" className={s.ava} src={u.photoUrl}/>
                        <div>{u.fullName}  </div>
                        <div>{u.post}  </div>
                       <div> {u.country}  </div>
                </div>
                <div>
                    {u.follow
                        ? <button onClick={() => {
                            this.props.onUnfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            this.props.onFollow(u.id)
                        }}>Follow</button>}
                </div>
            </span>
                </div>)
            }
        </div>
    }
}

export default Users;