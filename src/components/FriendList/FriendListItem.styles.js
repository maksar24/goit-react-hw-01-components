import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Online = css`
    rgb(33, 163, 98);
`;

const Offline = css`
    rgb(204, 63, 63);
`;

const Status = (status) => {
    if (status === false) {
        return Offline;
    }
    return Online;
};

export const IsActive = styled.span`
    border: 0.1875em solid ${Status};
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