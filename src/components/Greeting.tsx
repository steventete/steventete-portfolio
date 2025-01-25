function GreetingByTime() {
    const date = new Date();
    const hours = date.getHours();
    let greeting = '';

    if (hours >= 5 && hours < 12) {
        greeting = 'Good morning!';
    } else if (hours >= 12 && hours < 18) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }

    return greeting;
}

const currentGreeting = GreetingByTime();

const Greeting = () => {
    return (
        <div className="greeting w-full flex justify-center items-center absolute top-12 appears">
            <h1 className="text-3xl font-greeting  text-white">{currentGreeting}</h1>
        </div>
    );
}

export default Greeting;