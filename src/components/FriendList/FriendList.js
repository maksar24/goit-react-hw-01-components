import React from 'react';
import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';
import { Friends } from './FriendList.styles';

export const FriendList = ({ friends }) => {
    return (
        <Friends>
            {friends.map(client => (
                <FriendListItem key={client.id} avatar={client.avatar} name={client.name} isOnline={client.isOnline}/>
            ))}
        </Friends>
    );
};

FriendList.defaultProps = {
    friends: [],
};

FriendList.propTypes = {
    friends: PropTypes.array,
};