import "./Navbar.css";
import { Link } from "react-router-dom";
import { selectOpt } from "../../context/Context";
const Navbar = ({ books, setbooks, setTypebook }) => {
  const handleSelectChange = (event) => {
    setTypebook(event.target.value);
  };
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div className="navbar">
      <div className="navbar-container">
        <h2>Kutubxonam</h2>
        <select onChange={handleSelectChange}>
          {selectOpt.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <Link onClick={handleGoBack}>chiqish</Link>
      </div>
    </div>
  );
};

export default Navbar;
