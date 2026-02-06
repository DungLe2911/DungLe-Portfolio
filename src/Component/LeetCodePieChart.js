import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';

// Convert hex color to rgba with opacity
const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const questionColors = {
    'Easy': '#48ce4c',
    'Medium': '#ff9800',
    'Hard': '#f44336',
};

const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
}));

const mode = ['Easy', 'Medium', 'Hard', 'All'];

function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
        </StyledText>
    );
}

export default function LeetCodePieChart({
    data = null,
    className = ''
}) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [view, setView] = useState('All');
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [questionSet, setQuestionSet] = useState([]);
    const [difficultyDetails, setDifficultyDetails] = useState([]);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleViewChange = (event, newView) => {
        if (newView !== null) {
            setView(newView);
        }
    };

    useEffect(() => {
        if (data === null) return;
        const temp = [];
        const total = data.totalEasy + data.totalMedium + data.totalHard;
        temp.push({ id: 'Easy', label: 'Easy', value: data.totalEasy, percentage: (data.totalEasy / total) * 100, color: questionColors['Easy'] });
        temp.push({ id: 'Medium', label: 'Medium', value: data.totalMedium, percentage: (data.totalMedium / total) * 100, color: questionColors['Medium'] });
        temp.push({ id: 'Hard', label: 'Hard', value: data.totalHard, percentage: (data.totalHard / total) * 100, color: questionColors['Hard'] });
        setQuestionSet(temp);
        const details = [];
        details.push({ id: 'Easy - Solved', label: 'Solved', value: data.easySolved, percentage: (data.easySolved / data.totalEasy) * 100, color: questionColors['Easy'] });
        details.push({ id: 'Easy - TO DO', label: 'To Do', value: data.totalEasy - data.easySolved, percentage: ((data.totalEasy - data.easySolved) / data.totalEasy) * 100, color: hexToRgba(questionColors['Easy'], 0.4) });
        details.push({ id: 'Medium - Solved', label: 'Solved', value: data.mediumSolved, percentage: (data.mediumSolved / data.totalMedium) * 100, color: questionColors['Medium'] });
        details.push({ id: 'Medium - TO DO', label: 'To Do', value: data.totalMedium - data.mediumSolved, percentage: ((data.totalMedium - data.mediumSolved) / data.totalMedium) * 100, color: hexToRgba(questionColors['Medium'], 0.4) });
        details.push({ id: 'Hard - Solved', label: 'Solved', value: data.hardSolved, percentage: (data.hardSolved / data.totalHard) * 100, color: questionColors['Hard'] });
        details.push({ id: 'Hard - TO DO', label: 'To Do', value: data.totalHard - data.hardSolved, percentage: ((data.totalHard - data.hardSolved) / data.totalHard) * 100, color: hexToRgba(questionColors['Hard'], 0.4) });
        setDifficultyDetails(details);
        setTotalQuestions(total);
    }, [data]);

    // Determine if mobile (vertical) or desktop (horizontal) layout
    const isMobile = windowWidth <= 560;
    const innerRadius = 50;
    const middleRadius = 120;
    const chartSize = isMobile ? 280 : 400;

    if (data === null) return null;
    
    return (
        <Box className={`flex ${isMobile ? 'flex-col-reverse justify-center' : 'flex-row-reverse items-center gap-4'} ${className}`}>
            <ToggleButtonGroup
                color="primary"
                size="large"
                value={view}
                exclusive
                sx={{
                    width: `${isMobile ? '100%' : 'auto'}`,
                }}
                fullWidth
                orientation={isMobile ? 'horizontal' : 'vertical'}
                onChange={handleViewChange}
            >
                {mode.map((mode) => (
                    <ToggleButton key={mode} value={mode}
                        sx={{
                            backgroundColor: '#282828',
                            color: 'white',
                            '&.Mui-selected': {
                                backgroundColor: '#2845D6',
                                color: '#F2D06A',
                            },
                        }}>
                        {mode}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
            <Box
                className={`flex justify-center items-center h-fit flex-1 ${isMobile ? 'w-full' : 'w-1/2'}`}
                sx={{
                    overflow: 'visible',
                    padding: '20px',
                    position: 'relative',
                }}
            >
                {
                    view === 'All' ?
                        <PieChart
                            width={chartSize}
                            height={chartSize}
                            margin={{ top: 20, bottom: 20, left: 20, right: 20 }}
                            series={[
                                //inner ring
                                {
                                    innerRadius,
                                    outerRadius: middleRadius,
                                    data: questionSet,
                                    arcLabel: (item) => `${item.id} (${item.percentage.toFixed(0)}%)`,
                                    valueFormatter: ({ value }) =>
                                        `${value} out of ${totalQuestions} (${((value / totalQuestions) * 100).toFixed(0)}%)`,
                                    highlightScope: { fade: 'global', highlight: 'item' },
                                    highlighted: { additionalRadius: 2 },
                                    cornerRadius: 3,
                                },

                                // //outer ring
                                {
                                    innerRadius: middleRadius,
                                    outerRadius: middleRadius + 20,
                                    data: difficultyDetails,
                                    valueFormatter: ({ value }) =>
                                        `${value} out of ${totalQuestions} (${((value / totalQuestions) * 100).toFixed(0)}%)`,
                                    arcLabelRadius: 160,
                                    highlightScope: { fade: 'global', highlight: 'item' },
                                    highlighted: { additionalRadius: 2 },
                                    cornerRadius: 3,
                                },
                            ]}
                            sx={{
                                [`& .${pieArcLabelClasses.root}`]: {
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                    fill: '#ffffff',
                                },
                            }}
                            hideLegend
                        />
                        :
                        <PieChart
                            width={chartSize}
                            height={chartSize}
                            margin={{ top: 20, bottom: 20, left: 20, right: 20 }}
                            series={[
                                //inner ring
                                {
                                    innerRadius,
                                    outerRadius: middleRadius + 20,
                                    data: difficultyDetails.filter(item => item.id.startsWith(view)),
                                    arcLabel: (item) => `${item.label} (${item.percentage.toFixed(0)}%)`,
                                    valueFormatter: ({ value }) =>
                                        `${value} out of ${totalQuestions} (${((value / totalQuestions) * 100).toFixed(0)}%)`,
                                    highlightScope: { fade: 'global', highlight: 'item' },
                                    highlighted: { additionalRadius: 2 },
                                    cornerRadius: 3,
                                }
                            ]}
                            sx={{
                                [`& .${pieArcLabelClasses.root}`]: {
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                    fill: '#ffffff',
                                },
                            }}
                            hideLegend
                        />
                }
            </Box>
        </Box>
    );
}