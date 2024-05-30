export default function Page() {
    //Normal Function
    function helloWorld(username, dayOfWeek) {
        // return "Hello World! Welcome back, " + username + ". Today is " + dayOfWeek;
        return `Hello World! Welcome back,  ${username} . Today is  ${dayOfWeek}.`;
    }
    
    //Arrow function (Recommended version)
    const helloWorld2 = (username, dayOfWeek) => {
        return `Hello World! Welcome back,  ${username} . Today is  ${dayOfWeek}.`;
    }

    //Function in one line
    const helloWorld3 = (username) => `Hello ${username}`;
    const helloMath =(a,b) => a + b;

    //Calling a function inside a function
    const louder = (textFunc) => {
        //Check to ensure the incoming message is a function
        const thisText = textFunc("James");
        return `${thisText.toUpperCase()}!!!!`;
    }

    const multiplyBy = (num1) => {
        return (num2) => {
            return num1 * num2;
        }
    }

    const multiplyByThree = multiplyBy(3);
    const multiplyByTen = multiplyBy(10);

    return (
        <main>
            <h1>Function</h1>
            <p>{helloWorld("Alice", "Tuesday")}</p>
            <p>{helloWorld2("Joe", "Wednesday")}</p>
            <p>{helloWorld3("Bob")}</p>
            <p>{helloMath(3,4)}</p>
            <p>{louder(helloWorld3)}</p>
            <p>{louder(helloWorld2)}</p>
            {/* This following line will cause errors due to not passing a function
            <p>{louder("Thomas")}</p>  */}
            <p>{multiplyByThree(7)}</p>
            <p>{multiplyByTen(7)}</p>
        </main>
    );
}
