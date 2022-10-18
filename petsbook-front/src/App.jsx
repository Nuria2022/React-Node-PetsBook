import  {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { JwtContextProvider } from "./context/jwtContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import EditPet from "./pages/EditPet";
import Pets from "./pages/Pets";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import RequireAuth from "./components/RequiredAuth";



const App = () => {
  return (
  <JwtContextProvider>
  <div>
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/editpet" element={<RequireAuth><EditPet/></RequireAuth>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/pets" element={<Pets/>} />
          <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      <Footer/>
    </Router>
  </div>;
  </JwtContextProvider>
  );
};

export default App;
