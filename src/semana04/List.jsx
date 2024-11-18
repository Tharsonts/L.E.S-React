import { useState } from "react";

let nextId = 0;

export default function List() 
{
    const [name, setName] = useState('');
    const[artists, setArtists] = useState([]);

    return (
        <>
            <h3>Exercício 08</h3>
            <h1>Inspiring sculptors:</h1>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => 
            {
                artists.push({
                    id: nextId++,
                    name: name
                });
            }}>Add</button>
            <ul>
                {artists.map(artist =>(
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </>
    );
}