import React, { useEffect, useState } from 'react';

const Locations = () => {
    const [position, setPosition] = useState({ latitude: '', longitude: '' });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setPosition({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            });
        }
    }, []);

    return (
        <div>
            <p>Latitude: {position.latitude}</p>
            <p>Longitude: {position.longitude}</p>
        </div>
    );
};

export default Locations;