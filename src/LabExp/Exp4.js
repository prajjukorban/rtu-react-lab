import React, { useEffect, useState } from 'react';

export default function Exp4() {
    const [names, setNames] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                // Extract only the names from the API response
                const userNames = data.map(user => user.name);
                setNames(userNames);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h2>User Names</h2>
            <ul>
                {names.map((name, index) => (
                    <li className='name' key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
}
