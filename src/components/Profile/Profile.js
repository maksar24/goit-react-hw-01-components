import React from 'react';
import PropTypes from 'prop-types';
import {
    ProfileForm, Description, Stats, Photo, Name, Info, StatsItem, Label, Quantity
    } from './Profile.styles';

export const Profile = ({avatar, name, location, tag, stats}) => {
    return (<ProfileForm>
        <Description>
            <Photo
                src={avatar}
                alt={name}
                className="avatar"
            />
            <Name>{name}</Name>
            <Info>{tag}</Info>
            <Info>{location}</Info>
        </Description>

        <Stats>
            <StatsItem>
                <Label>Followers</Label>
                <Quantity>{stats.followers}</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Views</Label>
                <Quantity>{stats.views}</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Likes</Label>
                <Quantity>{stats.likes}</Quantity>
            </StatsItem>
        </Stats>
    </ProfileForm>);
};

Profile.propTypes = {
    avatar: PropTypes.string,
    location: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
};