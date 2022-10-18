import { useContext } from "react";
import { JwtContext } from "../context/jwtContext";
import {useForm} from "react-hook-form";
import { API } from "../services/API";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const { register, handleSubmit } = useForm();
    let navigate = useNavigate();
    const { setJwt, setPet } = useContext(JwtContext);

    const formSubmit = (formData) => {
        API.post("/pets/login", formData).then((res) => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("pet", JSON.stringify(res.data.petInDb));
          setJwt(res.data.token);
          setPet(res.data.petInDb);
          if (res.data.token) {
            navigate("/");
          }
        });
      };


    return (

    <section className="login">

        <h2>Please log in:</h2>

      <form onSubmit={handleSubmit(formSubmit)}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" 
        {...register("email")} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" 
        {...register("password")} />

       <button type="submit">Login</button>

      </form>  

    </section>

    );
};

export default Login