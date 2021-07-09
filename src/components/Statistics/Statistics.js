import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsBlock, StatList, StatsItem, Title } from './Statistics.styles';

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsBlock>
            {title && (<Title>{title}</Title>)}

            <StatList>
                {stats.map(value => (
                    <StatsItem key={value.id}>
                        <span className="label">{value.label}</span>
                        <span className="percentage">{value.percentage}%</span>
                    </StatsItem>
                ))}
            </StatList>
        </StatisticsBlock>
    );
};

Statistics.defaultProps = {
    stats: [],
};

Statistics.propTypes = {
    stats: PropTypes.array,
    title: PropTypes.string,
};