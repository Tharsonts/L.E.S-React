function Cup({ guest }) {
    return <h3> Tea cup for guest #{guest} </h3>
}

export default function TeaGathering() 
{
    let cups = [];
    for (let i = 1; i < 5; i++) 
        {
        cups.push(< Cup key={i} guest={i} />);
    }
    return (
        <>
            <h1> 7.Tea Gathering </h1>
            {cups}
        </>
        
    );
}