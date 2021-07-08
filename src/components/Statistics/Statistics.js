import React from 'react';

export const Statistics = ({ title, stats }) => {
    return (
        <section className="statistics">
            {title && (<h2 className="title">{title}</h2>)}

            <ul className="stat-list">
                {stats.map(value => (
                    <li className="item" key={value.id}>
                        <span className="label">{value.label}</span>
                        <span className="percentage">{value.percentage}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};