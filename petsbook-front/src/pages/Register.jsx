import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../services/API";
import "./Register.css";


const Register = () => {
      const {register, handleSubmit} = useForm();
      let navigate = useNavigate();
        
     const formSubmit = (data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("password", data.password);
        formData.append("avatar", data.avatar[0]);
        API.post("/pets/register", formData).then ((res) => {
          if (res) {
            navigate("/login");
          }
        });
     };
    

    return (
    <section className="register">
        <h2>Please register</h2>
        <form onSubmit={handleSubmit(formSubmit)} >
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" {...register("name")} />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" {...register("email")} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" {...register("password")} />
            <label htmlFor ="avatar">Avatar</label>
            <input type="file" id="avatar" name="avatar" {...register("avatar")} />
            <button type="submit">Register</button>
        </form>
    </section>
    )
};

export default Register