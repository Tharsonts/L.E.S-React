import Avatar from './Avatar.js';


function Card({ children }) 
{
    return (
        <div style={{  border: "2px solid #ccc", padding: "20px", borderRadius: "22px", display: "inline-block", margin: "16px"}}>
            {children}
        </div>
    );
}

export default function ProfileCard() 
{
    return (
        <div>
            <h1> 4.Katsuko Saruhashi</h1>
            <Card>
                <Avatar
                    size={100}
                    person={{
                        name: 'Katsuko Saruhashi',
                        imageId: 'YfeOqp2'
                    }} 
                />
            </Card>
        </div>
    );
}