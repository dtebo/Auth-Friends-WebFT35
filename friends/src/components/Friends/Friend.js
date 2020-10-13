import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import * as MUI from '../../material-ui';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import './Friends.css';

const Friend = (props) => {
    const { friend } = props;

    const handleDelete = e => {
        e.preventDefault();

        axiosWithAuth()
            .delete(`/friends/${friend.id}`)
            .then(res => {
                console.log('Friend: DT: handleDelete: ', res);

                props.history.push('/protected');
            })
            .catch(err => console.error('Friend: DT: handleDelete: Error: ', err));
    };

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
                    <MUI.Button
                        className='app-button'
                        component={Link}
                        to={`/friends/form/${friend.id}`}
                    >
                        Edit
                    </MUI.Button>
                    <MUI.Button
                        className='app-button'
                        onClick={handleDelete}
                    >
                        Delete
                    </MUI.Button>
                </MUI.CardContent>
            </MUI.Card>
        </>
    );
};

export default withRouter(Friend);