import React from 'react';

const Friend = (props) => {
    const { friend } = props;

    return(
        <>
            <p>{friend.name}</p>
        </>
    );
};

export default Friend;