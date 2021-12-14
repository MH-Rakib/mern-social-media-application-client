import React, { useContext, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import "./loginRegister.css";

export const baseUrl = `http://localhost:8000/api/auth`;

const LoginRegister = () => {
  const { user } = useContext(AuthContext);
  const [loggedInUser, setLoggedInUser] = user;
  console.log(loggedInUser);

  const [newUser, setNewUser] = useState(false);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const userName = useRef(null);
  const userEmail = useRef(null);
  const userPassword = useRef(null);

  const handleLoginRegister = async (e) => {
    e.preventDefault();
    //register
    if (newUser) {
      const user = { username, email, password };
      setLoading(true);
      fetch(`http://localhost:8000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => setLoggedInUser(data));
      setLoading(false);
    } else {
      const user = { email, password };
      setLoading(true);
      fetch(`http://localhost:8000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoggedInUser(data);
          console.log(data);
        });
      setLoading(false);
    }
  };

  const resetValue = () => {
    userName.current.value = "";
    userEmail.current.value = "";
    userPassword.current.value = "";
  };

  return (
    <div
      className=" d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="wrapper d-flex align-items-center justify-content-center">
        <div className="left d-none d-md-block ">
          <h3>Social App</h3>
          <p>Worlds Biggest Social Networking Platform</p>
        </div>

        <form className="right" onSubmit={handleLoginRegister}>
          <p className="loginRegisterHeading">
            {newUser ? "Create An Account" : "Log In"}
          </p>
          {newUser && (
            <input
              type="text"
              name="username"
              id=""
              placeholder="Your Username"
              required
              onBlur={() => setUserName(userName.current.value)}
              ref={userName}
            />
          )}
          <input
            type="email"
            required
            name="email"
            id=""
            placeholder="Your Email"
            onBlur={() => setEmail(userEmail.current.value)}
            ref={userEmail}
          />
          <input
            type="password"
            name="password"
            minLength={6}
            required
            id=""
            placeholder="Your Password"
            onBlur={() => setPassword(userPassword.current.value)}
            ref={userPassword}
          />
          <button
            className={!loading ? "button" : "buttonDisabled"}
            type="submit"
          >
            {newUser ? "Create Your Account" : "Log Into Your Account"}
          </button>
          <p className="loginRegistrationPageFooterText">
            {newUser ? "Already A Member?" : "Dont Have An Account?"}{" "}
            <span onClick={() => setNewUser(!newUser)}>
              {newUser ? "Log In" : "Create An Account"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;
