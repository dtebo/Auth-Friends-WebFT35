import React from 'react';

import './Friends.css';

const Friend = (props) => {
    const { friend } = props;

    return(
        <div className='friend'>
            <p>{friend.name}</p>
            <p>{`${friend.age} Years Old`}</p>
            <p>{`Email: ${friend.email}`}</p>
        </div>
    );
};

export default Friend;