
export default function DogForm(){

    const handleSubmit = (event) => {
        console.dir(event);
        event.preventDefault()

    }

    return (
        <form onSubmit={handleSubmit} action="">
            <div>
                <label>Dog Name:</label>
                <input type="text" />
            </div>
            <div>
                <label>Image URL:</label>
                <input type="text"/>
            </div>
            <div>
                <label>Dog Name:</label>
                <textarea></textarea>
            </div>
            <div>
                <button>Add Dog!</button>
            </div>

        </form>
    );
}