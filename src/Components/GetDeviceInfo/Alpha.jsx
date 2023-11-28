import React, { useEffect, useState } from 'react';

const Alpha = () => {
    const [deviceName, setDeviceName] = useState('');

    useEffect(() => {
        const userAgent = navigator.userAgent;
        const deviceNameRegex = /\((.*?)\)/; // Regex to extract text within parentheses

        const matches = userAgent.match(deviceNameRegex);
        if (matches && matches.length >= 2) {
            const deviceName = matches[1];
            setDeviceName(deviceName);
        }
    }, []);

    const [orientation, setOrientation] = useState({
        alpha: '',
        beta: '',
        gamma: ''
    });

    const handleDeviceOrientation = (event) => {
        setOrientation({
            alpha: event.alpha,
            beta: event.beta,
            gamma: event.gamma
        });
    };

    useEffect(() => {
        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', handleDeviceOrientation);
        }

        return () => {
            window.removeEventListener('deviceorientation', handleDeviceOrientation);
        };
    }, []);

    return (
        <div>
            <p>Device Name: {deviceName}</p>
            <p>Alpha: {orientation.alpha}</p>
            <p>Beta: {orientation.beta}</p>
            <p>Gamma: {orientation.gamma}</p>
        </div>
    );
};

export default Alpha;