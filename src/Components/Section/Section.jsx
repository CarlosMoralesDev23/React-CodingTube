import './Section.css'
import userCarlosMorales from '../../assets/1.png';
import userCarlitosMorales from '../../assets/2.png';
import userSofiaMorales from '../../assets/3.png';
import userAlbertoMorales from '../../assets/4.png';
import userAlexandraGarcia from '../../assets/5.png';

const users = [
    {
        id: 1,
        name: "Carlos Morales",
        description: "Web Fronted Developer Sr",
        img: userCarlosMorales,
    },
    {
        id: 2,
        name: "Carlitos Morales",
        description: "Web Fronted Developer Jr",
        img: userCarlitosMorales,
    },
    {
        id: 3,
        name: "Sofia Morales",
        description: "Web Fronted Developer Training",
        img: userSofiaMorales,
    },
    {
        id: 4,
        name: "Alberto Morales",
        description: "Web Fronted Developer Ssr",
        img: userAlbertoMorales,
    },
    {
        id: 5,
        name: "Alexandra Garcia",
        description: "Designer UX UI Sr",
        img: userAlexandraGarcia,
    },
];

const Section = ({ title }) => {
    return (
        <section className="section">
            <h2>{title}</h2>
            <div className="cards">
                {users.map((user) => {
                    // const imagePath = (`../../assets/${user.id}.png`)
                    return (
                        <div key={user.id} className="card">
                            <img
                                src={user.img}
                                alt={user.name}
                                className="image"
                            />
                            <h2 className="name">{user.name}</h2>
                            <p className="description">{user.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Section;
