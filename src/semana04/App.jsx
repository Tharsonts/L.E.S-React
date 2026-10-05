export default function App() 
{
    return (
        <>
            <h3> Exercício 01 </h3>
            <ToolbarA
                onPlayMovie={() => alert('Playing!')}
                onUploadImage={() => alert('Uploading!')}
            />
        </>
    );
}

function ToolbarA({ onPlayMovie, onUploadImage }) 
{
    return (
        <div>
            <button onClick={onPlayMovie}>
                Play Movie
            </button>
            <button onClick={onUploadImage}>
                Upload Image
            </button>
        </div>
    );
}

