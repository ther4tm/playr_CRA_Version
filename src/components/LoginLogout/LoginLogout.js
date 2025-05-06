import React from "react";
import style from './loginLogout.module.css';

const LoginLogoutButtons = (props) => {
    if (!props.userData) {
      return (
        <button
        className={style.loginButton}
        onClick={props.login}>Log in with Spotify</button>
      )
    } else {
      return (
        <div className={style.info}>
          <div>
            <p>Logged in as {props.userData.id}</p>
          </div>
          <div className={style.buttonContainer}>
            <button
            className={style.button}
            onClick={props.refresh}>Refresh credentials</button>

            <button
            className={style.button}
            onClick={props.logout}>Log out</button>
          </div>
        </div>
      )
    };
  };

  export default LoginLogoutButtons;