import { useEffect, useState } from "react";
import { API } from "../services/API";
import  Petcard  from "../components/PetCard";
import "./Pets.css";
import SearchBar from "../components/SearchBar";

  
const Pets = () => {
    const [allPets, setAllPets] = useState([]);
    const [filterWord, setfilterWord] = useState ("");

const filteredPets = allPets.filter(
   (pet) =>
   pet.name.toLowerCase().includes(filterWord) ||
   pet.description.toLowerCase().includes(filterWord)
   
    
   
);   

    const getAllPets = async () => {
        API.get("/pets").then((resPets) => {
        setAllPets(resPets.data.pets);
        });
        }; 

        useEffect (() => {
            getAllPets(); 
        }, []);

    return (
    <section className="pets">
        <h1>Pets</h1>
        <SearchBar setfilterWord={setfilterWord} />
        <div className="gallery">
            {allPets.length ? 
              filteredPets.map((pet) => (
            <Petcard pet={pet} key={pet._id} />
            ))
         : (
        <p>Loading pets...</p>
        )}
        </div>
        {!filteredPets.length ? <p>Pet not found</p> : null}
    </section>
    );
};

export default Pets