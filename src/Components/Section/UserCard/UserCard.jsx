import { useState } from "react";

export const UserCard = ({ user }) => {
    const [isContacted, setIsContacted] = useState(false);

    const { id, name, description, img } = user;

    const handleClick = () => {
        setIsContacted(!isContacted);
    };

    return (
        <div key={id} className="card">
            <img src={img} alt={name} className="image" />
            <h2 className="name"> {name} </h2>
            <p className="description"> {description} </p>
            <button
                id={id}
                onClick={() => {
                    handleClick();
                }}
            >
                {
                    isContacted ? 'Contactado' : 'Contactar'
                }
            </button>
        </div>
    );
};
