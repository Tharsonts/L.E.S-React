import { useState } from "react";

let initialArtist = [
    { id: 0, name:'Marta Colvin Andrade'},
    { id: 1, name:'Lamidi Olonade Fakeye'},
    { id: 2, name:'Louise Nevelson'}
];

export default function List2() 
{
    const [artists, setArtists] = useState(
        initialArtist
    );

    return (
        <>
            <h3>Exercício 09</h3>
            <h1>Inspiring sculpitors:</h1>
            <ul>
                {artists.map(artists => (
                    <li key={artists.id}>
                        {artists.name}{' '}
                        <button onClick={() => 
                        {
                            setArtists(
                                artists.filter(a =>
                                    a.id !== artists.id
                                )
                            );
                        }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}