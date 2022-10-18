import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../context/jwtContext";
import { API } from "../services/API";
import "./Profile.css";

const Profile = () => {

    const {pet, logout} = useContext(JwtContext);
    const {register, handleSubmit} =useForm();
    let navigate = useNavigate();

    const defaultValues = {
        name: pet.name,
        description: pet.description,
    }

    const formSubmit = (data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("avatar", data.avatar[0]);
        API.patch(`/pet/${pet._id}`, formData).then((res) => {
            logout();
            alert ("Please, log in again using the updated details")
            navigate("/login")
        })
    }

    return (
    <section className="profile">
        <h2>Profile</h2>
        <img src={pet.avatar} alt="Pet avatar" />
        <form onSubmit={handleSubmit(formSubmit)}>
            
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" {...register("name")} />
       
        <label htmlFor="description">Description</label>
        <input type="text" id="description" name="description" {...register("description")} />
       
        <input type="file" id="avatar" name="avatar" {...register("avatar")} />
        <button type="submit">Edit Profile</button>
        </form>
    
    </section>
    )
};

export default Profile