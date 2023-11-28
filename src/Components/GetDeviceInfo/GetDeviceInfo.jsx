import React, { useEffect, useState } from 'react';

const GetDeviceInfo = () => {
    const [deviceInfo, setDeviceInfo] = useState({
        userAgent: '',
        language: '',
        platform: '',
        screenWidth: '',
        screenHeight: ''
    });

    useEffect(() => {
        setDeviceInfo({
            userAgent: navigator.userAgent,
            language: navigator.language,
            platform: navigator.platform,
            screenWidth: window.screen.width,
            screenHeight: window.screen.height
        });
    }, []);

    return (
        <div>
            <p>User Agent: {deviceInfo.userAgent}</p>
            <p>Language: {deviceInfo.language}</p>
            <p>Platform: {deviceInfo.platform}</p>
            <p>Screen Width: {deviceInfo.screenWidth}</p>
            <p>Screen Height: {deviceInfo.screenHeight}</p>
        </div>
    );
};

export default GetDeviceInfo;