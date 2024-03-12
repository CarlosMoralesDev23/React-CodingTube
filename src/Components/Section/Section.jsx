import "./Section.css";
// import userCarlosMorales from "../../assets/1.png";
// import userCarlitosMorales from "../../assets/2.png";
// import userSofiaMorales from "../../assets/3.png";
// import userAlbertoMorales from "../../assets/4.png";
// import userAlexandraGarcia from "../../assets/5.png";

import { useEffect, useState } from "react";
import { UserCard } from "./UserCard/UserCard";

// const users = [
//     {
//         id: 1,
//         name: "Carlos Morales",
//         description: "Web Fronted Developer Sr",
//         img: userCarlosMorales,
//     },
//     {
//         id: 2,
//         name: "Carlitos Morales",
//         description: "Web Fronted Developer Jr",
//         img: userCarlitosMorales,
//     },
//     {
//         id: 3,
//         name: "Sofia Morales",
//         description: "Web Fronted Developer Training",
//         img: userSofiaMorales,
//     },
//     {
//         id: 4,
//         name: "Alberto Morales",
//         description: "Web Fronted Developer Ssr",
//         img: userAlbertoMorales,
//     },
//     {
//         id: 5,
//         name: "Alexandra Garcia",
//         description: "Designer UX UI Sr",
//         img: userAlexandraGarcia,
//     },
// ];

const Section = ({ title }) => {

    const [count, setCount] = useState(1)
    const [likes, setLikes] = useState(0)
    const [user, setUser] = useState({})

    useEffect(() => {
        console.log('UseEffect')
        fetch(`https://dummyjson.com/users/${count}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setUser(data);
            }); 

    }, [count])

    const handleClick = () => setCount(count + 1)
    const handleIncreaseLikes = () => setLikes(likes + 1)
    
    return (
        <>
            <h2>{count}</h2>
            <button onClick={handleClick}>Siguiente</button>

            <h2>{likes}</h2>
            <button onClick={handleIncreaseLikes}>Likes</button>

            <section className="section">
                <h2>{title}</h2>

                <div className="cards">
                    <UserCard key={user.id} user={user} />
                    {/* {users.map((user) => {
                    {users.map((user) => {
                        // const imagePath = (`../../assets/${id}.png`)
                        return <UserCard key={user.id} user={user} />;
                    })} */}
                </div>
            </section>
        </>
    );
    
};

export default Section;


