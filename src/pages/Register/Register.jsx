import "./Register.scss";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div className="register">
      <div className="cart">
        <div className="left">
          <h1>Social Sphere </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur accusantium necessitatibus eveniet impedit temporibus
            officiis veritatis dolorum odit facere culpa, quidem qui? Eligendi a
            et, deleniti molestiae amet vitae vel!
          </p>
          <span>Do you have account</span>
          <Link to="/login">
            <button>Loign</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Name" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
