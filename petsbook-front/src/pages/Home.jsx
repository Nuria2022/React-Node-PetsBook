import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
    <section className="home"><h1>Welcome to Petsbook</h1>
    <img src="./images/logo.png" alt="Pethub.png" />
    <Link to="/login">Please Login</Link>
    </section>
    
    )
};

export default Home
