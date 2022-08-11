import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../components/Context";

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [logInFormIsIncorrect, setLogInFormIsIncorrect] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { users, addUser, logInUser, currentUser } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      logInUser(account);
      setLogInFormIsIncorrect(false);
      navigate("/dashboard", { state: currentUser });
    } else if (!account) {
      //new user
      setLogInFormIsIncorrect(false);
      addUser({ username: username, password: password, todos: [] });
      logInUser({ username: username, password: password, todos: [] });
      navigate("/dashboard", { state: { currentUser } });
    } else if(username.trim()==="" || password.trim()==="") {
      setLogInFormIsIncorrect(true);
      setErrorMessage("Wrong Credentials!");
    }
    else {
      //wrong password was entered
      setLogInFormIsIncorrect(true);
      setErrorMessage("Password is incorrect!");
    }
  };
  return (
    <div className="loginForm">
      <p>Please, log in or sign up</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Username"
          placeholder="Login"
          value={username}
          onChange={(e) => {setLogInFormIsIncorrect(false);setUserName(e.target.value)}}
        />
        <br />
        <input
          type="password"
          name="Password"
          placeholder="Password"
          onChange={(e) => {setLogInFormIsIncorrect(false);setPassword(e.target.value)}}
        />
        <br />
        {!logInFormIsIncorrect? null : <div
          className="passwordIncorrect"
        >
          {errorMessage}
        </div>}
        <button type="submit">Login / Sign up</button>
      </form>
    </div>
  );
};
