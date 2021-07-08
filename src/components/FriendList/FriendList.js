import React from 'react';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list">
            {friends.map(client => (
                <FriendListItem key={client.id} avatar={client.avatar} name={client.name} isOnline={client.isOnline}/>
            ))}
        </ul>
    );
};