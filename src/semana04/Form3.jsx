import { useState } from "react";

export default function Form3() 
{
    const [person, setPerson] = useState({
        name: "Niki de Saint Phalle",
        artwork: {
            title: "Blue Nana",
            city: "Hamburg",
            image: "https://i.imgur.com/Sd1AgUOm.jpg"
        }
    });

    function handleNameChange(e) 
    {
        setPerson({
            ...person,
            name: e.target.value
        });
    }

    function handleTitleChange(e) 
    {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                title: e.target.value
            }
        });
    }

    function handleCityChange(e) 
    {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                city: e.target.value
                }
        });
    }

    function handleImageChange(e) 
    {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                image: e.target.value
            }
        });
    }    


    return (
        <>
            <h3>Exercício 07</h3>
            <p>
                Name:
                <input
                    value={person.name}
                    onChange={handleNameChange}
                />
            </p>
            <p>
                Title:
                <input
                    value={person.artwork.title}
                    onChange={handleTitleChange}
                />
            </p>
            <p>
                City:
                <input
                    value={person.artwork.city}
                    onChange={handleCityChange}
                />
            </p>
            <p>
                Image:
                <input
                    value={person.artwork.image}
                    onChange={handleImageChange}
                />
            </p>
            <p>
                <i>{person.artwork.title}</i>
                {' by '}
                {person.name}
                <br />
                (location in {person.artwork.city})
            </p>
            <img
                src={person.artwork.image}
                alt={person.artwork.title}
            />
        </>
    );
}