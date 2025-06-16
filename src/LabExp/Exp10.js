import React, { useEffect, useState } from 'react';

export default function Exp10() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            const currentTime = new Date();
            setTime(currentTime.toLocaleTimeString());

            // Determine greeting based on hours
            const hours = currentTime.getHours();
            if (hours < 12) {
                setGreeting("Good Morning");
            } else if (hours < 18) {
                setGreeting("Good Afternoon");
            } else {
                setGreeting("Good Evening");
            }
        }, 1000);

        return () => {
            clearInterval(timer); // Cleanup to avoid memory leaks
        };
    }, []);

    return (
        <div>
            <h1>{time}</h1>
            <h2>{greeting}</h2>
        </div>
    );
}
