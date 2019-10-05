import React, { useEffect, useState } from 'react';
import api from '../../services/api';

export default function Dashboard() {
    const [ spots, setSpots ] = useState([]);
    // Executa a função cada vez que uma das variávels do array é alterada
    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers: { user_id }
            });

            setSpots(response.data);
        }

        loadSpots();
    }, []); // Sem parâmetros: executa apenas uma vez, ao carregar o componente

    return (
        <>
            <ul clasName="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header />
                        <strong>{spot.company}</strong>
                        <span>{spot.price}</span>
                    </li>
                ))}
            </ul>
        </>
    );
}