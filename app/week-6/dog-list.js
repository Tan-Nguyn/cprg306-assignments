import DogCard from './dog-card';

export default function DogList({ listOfDogs }) {
    return (
        <div>
            {listOfDogs.map((dog) => (
                <DogCard key={dog.id} dogObj={dog} />
            ))}
        </div>
    );
}
