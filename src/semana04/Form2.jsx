import { useState } from "react";

export default function Form2()
{
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com' 
    });

    function handleFirstNameChange(e) 
    {
        person.firstName = e.target.value;
    }

    function handleLastNameChange(e) 
    {
        person.lastName = e.target.value;
    }

    function handleEmailChange(e) 
    {
        person.email = e.target.value;
    }

    return (
        <>
            <h3> Exercício 06 </h3>
            <p>
                Fisrt name:
                <input 
                    value={person.firstName} 
                    onChange={handleFirstNameChange} 
                />
            </p>
            <p>
                Last name:
                <input
                value={person.lastName}
                onChange={handleLastNameChange}
                />
            </p>
            <p>
                Email:
                <input
                value={person.email}
                onChange={handleEmailChange}
                />
            </p>
            <p>{person.firstName} {person.lastName} ({person.email})</p>
        </>
    )
}