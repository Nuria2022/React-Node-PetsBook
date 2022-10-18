import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { JwtContext } from "../context/jwtContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { pet, logout } = useContext(JwtContext);
  const navigate = useNavigate();

    return (
    <header>
        <nav>
            <h1>Petsbook</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/pets">Pets</Link>
          </li>
          {pet ? (
          <>
         
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          </>
          ) : null}
        </ul>  
        <div className="control">
          {pet ? (
          <>
          <p>Welcome {pet.name}</p>
          {pet.avatar !== "undefined" ? ( 
            <img src={pet?.avatar} alt="Pet Avatar" />
          ) : null }
          
          <button onClick={() => logout() & navigate ("/login")}>Logout</button>
          </> 
        ) : ( 
          <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          </ul>
        )}
      </div>  
      </nav>
    </header>
    );
};

export default Header;