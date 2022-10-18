


import "./PetCard.css";

const Petcard = ({ pet }) => {
    return ( 
 <div className="info-petcard">
    <figure className="petcard">
        <img className="image" src={pet.avatar} alt={pet.name} />
        <h3 className="name">{pet.name}</h3>
        <p>{pet.description}</p>
    </figure>
  </div>
    );
};

export default Petcard