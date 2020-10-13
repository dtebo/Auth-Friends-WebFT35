import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../../utils/axiosWithAuth';

import Friend from './Friend';

const FriendsList = props => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                console.log('FriendsList: DT: useEffect: ', res.data);

                setFriends(res.data);

                console.log('FriendsList: DT: useEffect: ', friends);
            })
            .catch(err => console.error('FriendsList: DT: useEffect: Error: ', err));
    }, [])

    return(
        <>
            {friends.map(friend => {
                return <Friend key={friend.id} friend={friend} />
            })}
        </>
    );
};

export default FriendsList;