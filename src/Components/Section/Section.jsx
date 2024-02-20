import "../../assets"
import "./Section.css";


const users = [
    {
        id: 1,
        nombre: "Carlos Morales",
        description: "Web Fronted Developer Sr",
    },
    {
        id: 2,
        nombre: "Carlitos Morales",
        description: "Web Fronted Developer Jr",
    },
    {
        id: 3,
        nombre: "Sofia Morales",
        description: "Web Fronted Developer Training",
    },
    {
        id: 4,
        nombre: "Alberto Morales",
        description: "Web Fronted Developer Ssr",
    },
];

const Section = ({ title }) => {
    return (
        <section className="section">
            <h3>{title}</h3>

            {users.map((user) => {

                const imagePath = require(`../../assets/${user.nombre}.png`).default
                return (
                    <div key={user.id}>
                        <img src= {imagePath} alt= {user.nombre} />
                        <h2>{user.nombre}</h2>
                        <p>{user.description}</p>
                    </div>
                );
            })}
        </section>
    );
};

export default Section;
