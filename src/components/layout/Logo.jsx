import React, { useState } from 'react';

/**
 * Microsage brand logo (navbar + footer).
 * Uses public/IMG_2896.PNG — full mark with icon, wordmark, and tagline.
 */
const Logo = ({ height = 64, className = '', variant = 'dark' }) => {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className={`d-flex align-items-center ${className}`} style={{ height }}>
        <span
          style={{
            fontSize: Math.min(height * 0.45, 22),
            fontWeight: 800,
            color: variant === 'light' ? '#ffffff' : '#0f172a',
            letterSpacing: '-0.5px',
            fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
          }}
        >
          MICROSAGE
        </span>
      </div>
    );
  }

  return (
    <div className={`d-flex align-items-center ${className}`} style={{ height }}>
      <img
        src={`${process.env.PUBLIC_URL}/IMG_2896.PNG`}
        alt="Microsage — Empowering Intelligence"
        height={height}
        style={{
          height: `${height}px`,
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
          display: 'block',
        }}
        onError={() => setImgError(true)}
      />
    </div>
  );
};

export default Logo;
