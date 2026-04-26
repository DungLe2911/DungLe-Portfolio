import React, { useState, useEffect } from 'react';

const styles = `
@keyframes spinY {
    0%   { transform: rotateY(0deg); }
    66%  { transform: rotateY(360deg); }
    100% { transform: rotateY(360deg); }
}

.badge-scene {
    width: 52px;
    height: 52px;
    perspective: 400px;
    flex-shrink: 0;
    transition: transform 0.2s ease;
}

.badge-scene.hovered {
    transform: scale(1.2);
}

.badge-card {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
}

.badge-card.spinning {
    animation: spinY 1.5s ease-in-out infinite;
}

.badge-face {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.badge-face.front {
    transform: rotateY(0deg);
}

.badge-face.back {
    transform: rotateY(180deg);
    background: #1a1f2c;
    border-radius: 8px;
    overflow: hidden;
}
`;

const HexBack = () => (
    <svg viewBox="0 0 52 52" width="52" height="52" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="silverMain" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#d0d4dc" />
                <stop offset="30%"  stopColor="#f0f2f5" />
                <stop offset="50%"  stopColor="#ffffff" />
                <stop offset="70%"  stopColor="#b8bcc6" />
                <stop offset="100%" stopColor="#888d9a" />
            </linearGradient>
            <linearGradient id="silverInner" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#c0c4ce" />
                <stop offset="40%"  stopColor="#e8eaee" />
                <stop offset="60%"  stopColor="#f5f6f8" />
                <stop offset="100%" stopColor="#9a9fac" />
            </linearGradient>
            <filter id="silverEmboss" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="0.6" result="blur" />
                <feSpecularLighting in="blur" surfaceScale="3" specularConstant="1.5"
                    specularExponent="25" lightingColor="#ffffff" result="spec">
                    <fePointLight x="15" y="8" z="20" />
                </feSpecularLighting>
                <feComposite in="spec" in2="SourceAlpha" operator="in" result="specOut" />
                <feBlend in="SourceGraphic" in2="specOut" mode="screen" />
            </filter>
            <filter id="hexShadow">
                <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000" floodOpacity="0.6" />
            </filter>
        </defs>
        <polygon
            points="26,3 47,14.5 47,37.5 26,49 5,37.5 5,14.5"
            fill="url(#silverMain)"
            stroke="#a0a5b0"
            strokeWidth="0.8"
            filter="url(#hexShadow)"
        />
        <polygon
            points="26,3 47,14.5 47,37.5 26,49 5,37.5 5,14.5"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.6"
            opacity="0.45"
        />
        <polygon
            points="26,11 40,18.5 40,33.5 26,41 12,33.5 12,18.5"
            fill="url(#silverInner)"
            stroke="#b0b5c0"
            strokeWidth="0.5"
        />
        <polygon
            points="26,11 40,18.5 40,33.5 26,41 12,33.5 12,18.5"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.4"
            opacity="0.55"
        />
        <text x="26" y="24"
            textAnchor="middle" dominantBaseline="middle"
            fontSize="5.5" fontFamily="system-ui, sans-serif" fontWeight="700"
            fill="#6b7280" filter="url(#silverEmboss)" letterSpacing="0.2"
        >LeetCode</text>
        <text x="26" y="32"
            textAnchor="middle" dominantBaseline="middle"
            fontSize="4.5" fontFamily="system-ui, sans-serif" fontWeight="600"
            fill="#7a8090" filter="url(#silverEmboss)" letterSpacing="0.2"
        >Badge</text>
    </svg>
);

export default function LeetCodeBadges({ data = null }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!data) return null;

    const badges = data.matchedUser?.badges ?? [];
    const mostRecentBadge = badges[0] ?? null;
    const isMobile = windowWidth <= 560;

    return (
        <>
            <style>{styles}</style>
            <div style={{
                backgroundColor: '#0f172a',
                color: '#d1d5db',
                padding: '24px',
                borderRadius: '8px',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                marginTop: '10px',
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h2 style={{ fontSize: '14px', margin: 0 }}>
                        <span style={{ fontWeight: '600' }}>{badges.length}</span> Badge{badges.length !== 1 ? 's' : ''}
                    </h2>
                    {mostRecentBadge && (
                        <span style={{ fontSize: '12px', color: '#9ca3af' }}>
                            Most Recent:{' '}
                            <span style={{ color: '#facc15', fontWeight: 600 }}>
                                {mostRecentBadge.displayName}
                            </span>
                        </span>
                    )}
                </div>

                {badges.length === 0 ? (
                    <p style={{ fontSize: '13px', color: '#6b7280' }}>No badges earned yet.</p>
                ) : (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile
                            ? 'repeat(4, 1fr)'
                            : 'repeat(auto-fill, minmax(72px, 1fr))',
                        gap: '12px',
                    }}>
                        {badges.map((badge, i) => (
                            <BadgeItem
                                key={badge.id ?? i}
                                badge={badge}
                                isRecent={badge === mostRecentBadge}
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

function BadgeItem({ badge, isRecent = false }) {
    const [hovered, setHovered] = useState(false);
    const imgSrc = badge.icon ?? badge.iconGif ?? null;

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
                cursor: 'default',
                position: 'relative',
                /* NO transform here — keeps 3D context intact */
            }}
        >
            {/* {isRecent && (
                <div style={{
                    position: 'absolute',
                    top: -4,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    border: '2px solid #facc15',
                    opacity: 0.6,
                    pointerEvents: 'none',
                    zIndex: 1,
                }} />
            )} */}

            {/* Scale lives HERE on the scene, not on a parent with transform */}
            <div className={`badge-scene${hovered ? ' hovered' : ''}`}>
                <div className={`badge-card${hovered ? ' spinning' : ''}`}>
                    <div className="badge-face front">
                        {imgSrc ? (
                            <img
                                src={imgSrc}
                                alt={badge.displayName}
                                title={badge.displayName}
                                style={{ width: 52, height: 52, objectFit: 'contain' }}
                            />
                        ) : (
                            <div style={{
                                width: 52, height: 52, borderRadius: '50%',
                                backgroundColor: '#1e293b',
                                display: 'flex', alignItems: 'center',
                                justifyContent: 'center', fontSize: 20,
                            }}>🏅</div>
                        )}
                    </div>

                    <div className="badge-face back">
                        <HexBack />
                    </div>
                </div>
            </div>

            <span style={{
                fontSize: '10px',
                color: false ? '#facc15' : '#9ca3af',
                textAlign: 'center',
                lineHeight: 1.3,
                maxWidth: 68,
                overflow: 'hidden',
                // textOverflow: 'ellipsis',
                // whiteSpace: 'nowrap',
                transition: 'transform 0.2s ease',
                display: 'inline-block',
                transform: hovered ? 'scale(1.2)' : 'scale(1)',
            }} title={badge.displayName}>
                {badge.displayName}
            </span>
        </div>
    );
}