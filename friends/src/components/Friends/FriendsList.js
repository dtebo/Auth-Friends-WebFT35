import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { axiosWithAuth } from '../../utils/axiosWithAuth';

import Friend from './Friend';

import * as MUI from '../../material-ui';

const FriendsList = props => {
    const [friends, setFriends] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        axiosWithAuth()
            .get('/friends')
            .then(res => {
                console.log('FriendsList: DT: useEffect: ', res.data);

                setFriends(res.data);

                console.log('FriendsList: DT: useEffect: ', friends);

                setIsLoading(false);
            })
            .catch(err => {
                console.error('FriendsList: DT: useEffect: Error: ', err);
                setIsLoading(false);
            });
    }, [])

    return(
        <div className='friends-list'>
            {isLoading ? <h3>Loading...</h3> : null}
            {friends.map(friend => {
                return <Friend key={friend.id} friend={friend} />
            })}
            <MUI.Button
                className='app-button'
                component={Link}
                to='/friends/add'
            >
                Add Friend
            </MUI.Button>
        </div>
    );
};

export default withRouter(FriendsList);