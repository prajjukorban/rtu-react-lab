import React, { useEffect, useState } from 'react';

export default function Exp6() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(timer); 
        };
    }, []);

    return (
        <div>
            <h1>{time}</h1>
        </div>
    );
}
