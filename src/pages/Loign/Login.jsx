import { Link } from "react-router-dom";
import "./Login.scss";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext.jsx";

export default function Login() {
  const { currentUser, login } = useContext(AuthContext);

  const Login = () => {};
  const handleLogin = () => {
    Login();
  };
  return (
    <div className="login">
      <div className="cart">
        <div className="left">
          <h1>Hello</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur accusantium necessitatibus eveniet impedit temporibus
            officiis veritatis dolorum odit facere culpa, quidem qui? Eligendi a
            et, deleniti molestiae amet vitae vel!
          </p>
          <span>Dont you have account</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />

            <button onClick={login}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
