
import React, { useEffect, useMemo } from 'react';

export default function ContributionHeatmap({
    data = {},
    windowWidth = window.innerWidth
}) {
    
    const heatmapData = useMemo(() => {
        const today = new Date();

        // Start from the most recent Sunday
        const endDate = new Date(today);
        endDate.setDate(endDate.getDate() - endDate.getDay());

        // Go back 52 weeks (364 days) to get exactly one year
        const startDate = new Date(endDate);
        startDate.setDate(startDate.getDate() - 364);

        const weeks = [];
        let currentDate = new Date(startDate);

        while (currentDate <= endDate) {
            const week = [];
            for (let i = 0; i < 7; i++) {
                const dayTimestamp = Date.UTC(
                    currentDate.getUTCFullYear(),
                    currentDate.getUTCMonth(),
                    currentDate.getUTCDate()
                ) / 1000;

                const count = data[dayTimestamp] || 0;

                week.push({
                    date: new Date(currentDate),
                    count,
                    dateStr: currentDate.toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    })
                });

                currentDate.setDate(currentDate.getDate() + 1);
            }
            weeks.push(week);
        }


        return weeks;
    }, [data]);

    const getColor = (count) => {
        if (count === 0) return '#1e293b'; // gray-800
        if (count <= 2) return '#14532d'; // green-900
        if (count <= 5) return '#15803d'; // green-700
        if (count <= 10) return '#22c55e'; // green-500
        return '#4ade80'; // green-400
    };

    const months = useMemo(() => {
        const monthLabels = [];
        let lastMonth = -1;

        heatmapData.forEach((week, weekIndex) => {
            const firstDay = week[0];
            const month = firstDay.date.getMonth();

            if (month !== lastMonth && weekIndex > 0) {
                monthLabels.push({
                    index: weekIndex,
                    label: firstDay.date.toLocaleDateString('en-US', { month: 'short' })
                });
                lastMonth = month;
            }
        });

        return monthLabels;
    }, [heatmapData]);

    const totalContributions = useMemo(() => {
        return Object.values(data).reduce((sum, count) => sum + count, 0);
    }, [data]);

    const visibleMonths = windowWidth <= 425 ? 4 : windowWidth <= 768 ? 8 : 11;

    const filteredHeatmapData = useMemo(() => {
        if (!heatmapData.length) return [];

        const lastDate = heatmapData[heatmapData.length - 1][0].date;
        const cutoffDate = new Date(lastDate);
        cutoffDate.setMonth(lastDate.getMonth() - visibleMonths + 1);

        // keep only weeks where the last day of the week >= cutoffDate
        return heatmapData.filter((week) => {
            const weekEndDate = week[week.length - 1].date;
            return weekEndDate >= cutoffDate;
        });
    }, [heatmapData, windowWidth]);

    const filteredMonths = useMemo(() => {
        const lastDate = heatmapData[heatmapData.length - 1][0].date;
        const cutoffDate = new Date(lastDate);
        cutoffDate.setMonth(lastDate.getMonth() - visibleMonths + 1);

        return months.filter((m) => {
            const monthDate = heatmapData[m.index][0].date;
            return monthDate >= cutoffDate;
        });
    }, [months, heatmapData, windowWidth]);




    return (
        <div style={{
            backgroundColor: '#0f172a',
            color: '#d1d5db',
            padding: '24px',
            borderRadius: '8px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            marginTop: '10px'
        }}>
            <div style={{ marginBottom: '16px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <h2 style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>
                    <span style={{ fontWeight: '600', display: 'inline' }}>{totalContributions}</span> contributions in the last year
                </h2>
            </div>

            <div style={{ display: 'flex', marginBottom: '8px', marginLeft: '32px', position: 'relative' }}>
                {filteredMonths.map((month, i) => {
                    // find the relative index of the first week of this month in filteredHeatmapData
                    const relativeIndex = filteredHeatmapData.findIndex(
                        (week) =>
                            week[0].date.getMonth() === heatmapData[month.index][0].date.getMonth() &&
                            week[0].date.getFullYear() === heatmapData[month.index][0].date.getFullYear()
                    );

                    if (relativeIndex === -1) return null;

                    return (
                        <div key={i} style={{ position: 'relative' }}>
                            {/* Month label */}
                            <div
                                style={{
                                    fontSize: '12px',
                                    color: '#9ca3af',
                                    position: 'absolute',
                                    left: `${relativeIndex * 16}px`, // spacing per week (adjust 16px as needed)
                                    top: '-15px', // above the heatmap
                                }}
                            >
                                {month.label}
                            </div>

                            {/* Vertical separator line */}
                            {i !== 0 && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        left: `${relativeIndex * 16 - 2}px`, // line slightly to the left of the first week
                                        top: '14px', // below the month label
                                        height: '100%',
                                        width: '1px',
                                        backgroundColor: '#4b5563', // gray-600 line
                                    }}
                                />
                            )}
                        </div>
                    );
                })}
            </div>



            {/* Heatmap grid */}
            <div style={{ display: 'flex', gap: '4px' }}>
                {/* Day labels */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '12px', color: '#9ca3af', marginRight: '8px' }}>
                    <div style={{ height: '12px' }}></div>
                    <div style={{ height: '12px' }}>Mon</div>
                    <div style={{ height: '12px' }}></div>
                    <div style={{ height: '12px' }}>Wed</div>
                    <div style={{ height: '12px' }}></div>
                    <div style={{ height: '12px' }}>Fri</div>
                    <div style={{ height: '12px' }}></div>
                </div>

                {/* Grid */}
                {filteredHeatmapData.map((week, weekIndex) => (
                    <div key={weekIndex} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {week.map((day, dayIndex) => (
                            <div
                                key={dayIndex}
                                style={{
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '2px',
                                    backgroundColor: getColor(day.count),
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}
                                title={`${day.count} contributions on ${day.dateStr}`}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'scale(1.2)';
                                    e.target.style.outline = '2px solid #9ca3af';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'scale(1)';
                                    e.target.style.outline = 'none';
                                }}
                            />
                        ))}
                    </div>
                ))}

            </div>

            {/* Legend */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px', fontSize: '12px', color: '#9ca3af' }}>
                <span>Less</span>
                <div style={{ display: 'flex', gap: '4px' }}>
                    <div style={{ width: '12px', height: '12px', backgroundColor: '#1e293b', borderRadius: '2px' }}></div>
                    <div style={{ width: '12px', height: '12px', backgroundColor: '#14532d', borderRadius: '2px' }}></div>
                    <div style={{ width: '12px', height: '12px', backgroundColor: '#15803d', borderRadius: '2px' }}></div>
                    <div style={{ width: '12px', height: '12px', backgroundColor: '#22c55e', borderRadius: '2px' }}></div>
                    <div style={{ width: '12px', height: '12px', backgroundColor: '#4ade80', borderRadius: '2px' }}></div>
                </div>
                <span>More</span>
            </div>
        </div>
    );
}
