import React from 'react';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
    return (
        <li className="item" key={id}>
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
        </li>
    )
};