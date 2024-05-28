import "./Register.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Reagister = () => {
  const [userName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [link, setlink] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    if (userName.length > 1 && Password.length > 1) {
      setlink("home");
      setUserName("");
      setPassword("");
    }
  };

  return (
    <div className="register-box">
      <div className="card_register">
        <h2>Kutubxonam</h2>

        <form action="" onChange={handleClick} className="register_form">
          <input
            type="text"
            className="register_input"
            placeholder="Nomingiz yoki email kiriting"
            required
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <input
            type="password"
            required
            className="register_input"
            placeholder="parol kiriting "
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Link to={link.length > 1 ? link : ""} className="register_btn">
            Kirish
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Reagister;
