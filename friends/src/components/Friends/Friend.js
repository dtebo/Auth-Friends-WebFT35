import React from 'react';

import * as MUI from '../../material-ui';

import './Friends.css';

const Friend = (props) => {
    const { friend } = props;

    return(
        <>
            <MUI.Card
                className='friend'
            >
                <MUI.CardContent>
                    <MUI.Typography
                        variant='body2'
                        component='p'
                    >
                        {friend.name}
                    </MUI.Typography>
                    <MUI.Typography
                        variant='body2'
                        component='p'
                    >
                        {`${friend.age} Years Old`}
                    </MUI.Typography>
                    <MUI.Typography
                        variant='body2'
                        component='p'
                    >
                        {`Email: ${friend.email}`}
                    </MUI.Typography>
                </MUI.CardContent>
            </MUI.Card>
        </>
    );
};

export default Friend;