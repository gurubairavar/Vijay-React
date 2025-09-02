import { useState } from "react";
import style from "./login.module.css";
import Dashboard from './Dashboard.jsx'


function Login() {
  const user = "Vijay";
  const pass = "Vijay@123";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function check(e) {
    e.preventDefault(); 

    if (username === user && password === pass) {
      setLoggedIn(true);   
    } else {
      setError("Invalid username or password");
    }
  }

  if (loggedIn) {
    return <Dashboard />;
  }

  return (
    <div className={style["login-container"]}>
      <div className={style["login-card"]}>
        <div className={style["login-header"]}>
          <h2>Sign In</h2>
        </div>

        <form className={style["login-form"]} onSubmit={check}>
          <div className={style["form-group"]}>
            <div className={style["input-wrapper"]}>
              <input
                placeholder="Username"
                type="text"
                name="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={style["form-group"]}>
            <div className={`${style["input-wrapper"]} ${style["password-wrapper"]}`}>
              <input
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {error && <p className={style["error-message"]}>{error}</p>}

          <button type="submit" className={style["login-btn"]}>
            <span className={style["btn-text"]}>Sign In</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
