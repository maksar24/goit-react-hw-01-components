import styled from '@emotion/styled';

const ColorStyle = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")"
}

export const Title = styled.h2`
    padding-top: 25px;
`;

export const StatisticsBlock = styled.section`
    text-align: center; 
    width: 400px;
    height: auto;
    margin-bottom: 50px;
    background-color: #ffffff;
`;

export const StatList = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    padding: 0px;
    margin: 0px;
    background-color: rgb(199, 195, 190);
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    border: 2px solid rgb(0, 0, 0);
    padding: 23px;
    color: rgb(255, 255, 255);
    background-color: ${ColorStyle};
`;