import React from 'react';
import PropTypes from 'prop-types';
import { Friend, IsActive } from './FriendListItem.styles';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
    return (
        <Friend key={id}>
            <IsActive status={isOnline} />
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </Friend>
    )
};

FriendListItem.propTypes = {
    FriendListItem: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
};