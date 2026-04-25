import React, { useState, useEffect } from 'react';

const spinStyle = `
@keyframes spinY {
    0%   { transform: rotateY(0deg); }
    66%  { transform: rotateY(360deg); }
    100% { transform: rotateY(360deg); }
}
`;

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
            <style>{spinStyle}</style>
            <div
                style={{
                    backgroundColor: '#0f172a',
                    color: '#d1d5db',
                    padding: '24px',
                    borderRadius: '8px',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    marginTop: '10px',
                }}
            >
                {/* Header */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '16px',
                    }}
                >
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

                {/* Badge grid */}
                {badges.length === 0 ? (
                    <p style={{ fontSize: '13px', color: '#6b7280' }}>No badges earned yet.</p>
                ) : (
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: isMobile
                                ? 'repeat(4, 1fr)'
                                : 'repeat(auto-fill, minmax(72px, 1fr))',
                            gap: '12px',
                        }}
                    >
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
    const imgAnimation = hovered ? 'spinY 1.5s ease-in-out infinite' : 'none';

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
                transform: hovered ? 'scale(1.2)' : 'scale(1)',
                transition: 'transform 0.2s ease',
            }}
        >
            {/* Glow ring for most recent */}
            {/* {isRecent && (
                <div
                    style={{
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
                    }}
                />
            )} */}

            {imgSrc ? (
                <img
                    src={imgSrc}
                    alt={badge.displayName}
                    title={badge.displayName}
                    style={{
                        width: 52,
                        height: 52,
                        objectFit: 'contain',
                        animation: imgAnimation,
                    }}
                />
            ) : (
                <div
                    style={{
                        width: 52,
                        height: 52,
                        borderRadius: '50%',
                        backgroundColor: '#1e293b',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 20,
                        animation: imgAnimation,
                    }}
                >
                    🏅
                </div>
            )}

            <span
                style={{
                    fontSize: '10px',
                    color: false ? '#facc15' : '#9ca3af',
                    textAlign: 'center',
                    lineHeight: 1.3,
                    maxWidth: 68,
                    overflow: 'hidden',
                }}
                title={badge.displayName}
            >
                {badge.displayName}
            </span>
        </div>
    );
}