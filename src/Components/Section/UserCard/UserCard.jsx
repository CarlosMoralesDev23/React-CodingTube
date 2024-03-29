import { useState } from "react";

export const UserCard = ({ user }) => {
    const [isContacted, setIsContacted] = useState(false);
    const [tecnologies, setTecnologies] = useState(['HTML', 'CSS', 'JS'])
    const [addres, setAddres] = useState({street: 'Calle Falsa', number: 123})

    const { id, firstName, email, image } = user;

    const handleClick = () => {
        setIsContacted(!isContacted);
    };

    const handleClick2 = () => {
        setTecnologies([...tecnologies, "React"]);
        console.log(tecnologies);
        
    };



    const handleClick3 = () => {
        setAddres({...addres, street: 'Nueva Calle', number: 456})
        console.log(addres);
    };0

    
    // console.log(`Tarjeta ${name} renderizada`)

    return (
        <div key={id} className="card">
            <img src={image} alt={firstName} className="image" />
            <h2 className="name"> {firstName} </h2>
            <p className="email"> {email} </p>
            <button id={id} onClick={() => handleClick()}>
                {isContacted ? "Contactado" : "Contactar"}
            </button>
            <button id={id} onClick={() => handleClick2()}>
                Tecnologias
            </button>
            <button id={id} onClick={() => handleClick3()}>
                Dirección
            </button>
        </div>
    );
};
