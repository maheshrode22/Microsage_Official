import React, { useState, useEffect } from 'react';

// Attempt to import the logo image
let logoImage;
try {
    // We use require for dynamic-like checks in some environments,
    // or a standard import if we're sure it exists.
    // For now, let's assume standard Vite/CRA import.
    logoImage = require('../assets/logo.png');
} catch (e) {
    logoImage = null;
}

const Logo = ({ height = 40, showText = true, className = "", variant = "dark" }) => {
    const [imgError, setImgError] = useState(!logoImage);
    const textColor = variant === "light" ? "#ffffff" : "#1f2937";
    const subTextColor = variant === "light" ? "rgba(255, 255, 255, 0.7)" : "#6b7280";
    const brandBlue = "#2b7bb9";

    return (
        <div className={`d-flex align-items-center ${className}`} style={{ height }}>
            {!imgError ? (
                <img
                    src={logoImage}
                    alt="Microsage Logo"
                    height={height}
                    style={{ marginRight: '5px', height: `${height}px`, width: 'auto' }}
                    onError={() => setImgError(true)}
                />
            ) : (
                <svg
                    viewBox="0 0 100 100"
                    height={height}
                    width={height}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-2"
                    style={{ flexShrink: 0 }}
                >
                    {/* Outer Circular Boundary */}


                    {/* Left Solid Blue Half */}
                    <path
                        d="M50 2C30.2 2 13 18.2 11 41.5V58.5C13 81.8 30.2 98 50 98L50 2Z"
                        fill={brandBlue}
                    />

                    {/* White Right Half Background */}
                    <path
                        d="M50 2L50 98C76.2 98 97.4 76.8 97.4 50C97.4 23.2 76.2 2 50 2Z"
                        fill="white"
                    />

                    {/* Brand Circuit Traces in Blue */}
                    <g stroke={brandBlue} strokeWidth="5.5" strokeLinecap="round" fill="none">
                        <path d="M43 35H55C60 35 63 32 63 27V21" />
                        <circle cx="63" cy="21" r="5" fill={brandBlue} stroke="none" />
                        <path d="M43 51H75" />
                        <circle cx="75" cy="51" r="5" fill={brandBlue} stroke="none" />
                        <path d="M43 67H60C68 67 72 73 72 80V82" />
                        <circle cx="72" cy="82" r="5" fill={brandBlue} stroke="none" />
                        <path d="M43 83H52C54 83 55 84 55 86V88" />
                        <circle cx="55" cy="88" r="4" fill={brandBlue} stroke="none" />
                    </g>

                </svg>
            )}

            {showText && (
                <div className="d-flex flex-column justify-content-center" style={{ marginLeft: '4px' }}>
                    <span
                        style={{
                            fontSize: height * 0.58,
                            fontWeight: 800,
                            color: textColor,
                            lineHeight: 0.9,
                            letterSpacing: '-1.2px',
                            fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif"
                        }}
                    >
                        MICROSAGE
                    </span>

                </div>
            )}
        </div>
    );
};

export default Logo;
