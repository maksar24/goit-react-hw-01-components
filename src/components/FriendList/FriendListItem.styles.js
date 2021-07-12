import styled from '@emotion/styled';

export const IsActive = styled.span`
    border: 0.1875em solid ${props => props.status ? 'rgb(33, 163, 98)' : 'rgb(204, 63, 63)'};
    border-radius: 50%;
    height: 5em;
    width: 5em;
    margin-right: 10px;
`;

export const Friend = styled.li`
    border: 2px solid rgb(0, 0, 0);
    padding: 40px;
    color: rgb(255, 255, 255);
    background-color: rgb(147, 148, 255);
`;