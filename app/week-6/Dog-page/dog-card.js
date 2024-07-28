

export default function DogCard({ dogObj }) {
    const { id, name, age } = dogObj;

    return (
        <div className="border border-blue-500 m-1 p-2 text-white bg-blue-400">
            <h3>{name}</h3>
            <p><b>ID:</b> {id}</p>
            <p><b>Age:</b> {age}</p>
        </div>
    );
}
