import styled from '@emotion/styled';

export const ProfileForm = styled.div`
    text-align: center; 
    width: 400px;
    height: auto;
    margin-bottom: 50px;
`;

export const Description = styled.div`
    background-color: #ffffff;
    padding-bottom: 15px;
`;

export const Stats = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    padding: 0px;
    margin: 0px;
    background-color: rgb(199, 195, 190);
`;

export const Photo = styled.img`
    width: 200px;
    border-radius: 100px;
`;

export const Name = styled.p`
    font-weight: bold;
`;

export const Info = styled.p`
    color: rgb(94, 94, 94);
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    border: 2px solid rgb(0, 0, 0);
    padding: 41px;
`;

export const Label = styled.span`
    color: rgb(94, 94, 94);
`;

export const Quantity = styled.span`
    font-weight: bold;
`;