import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import { axiosWithAuth } from '../../utils/axiosWithAuth';

import './Friends.css';

class FriendForm extends Component{
    state = {
        isEditing: false,
        formData: {
            name: '',
            age: 0,
            email: ''
        },
        error: ''
    };

    componentDidMount(){
        const { id } = this.props.match.params;

        if(id){
            //if we are editing, we need to get the friend data
            this.setState({
                ...this.state,
                isEditing: true
            });

            axiosWithAuth()
                .get(`/friends/${id}`)
                .then(res => {
                    console.log('FriendForm: DT: componentDidMount: ', res);

                    this.setState({
                        ...this.state,
                        formData: {
                            ...res.data
                        }
                    });
                })
                .catch(err => {
                    console.error('FriendForm: DT: componentDidMount: Error: ', err);
                });
        }
        else{
            this.setState({
                ...this.state,
                isEditing: false
            });
        }
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            formData: {
                ...this.state.formData,
                [e.target.name]: e.target.value
            }
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        if(this.state.isEditing){
            axiosWithAuth()
                .put(`/friends/${this.state.formData.id}`, this.state.formData)
                .then(res => {
                    console.log('FriendForm: DT: handleSubmit: Editing: ', res);

                    this.props.history.push('/protected');
                })
                .catch(err => console.error('FriendForm: DT: handleSubmit: Editing: Error: ', err));
        }
        else{
            axiosWithAuth()
                .post(`/friends`, this.state.formData)
                .then(res => {
                    console.log('FriendForm: DT: handleSubmit: Adding: ', res);

                    this.props.history.push('/protected');
                })
                .catch(err => console.error('FriendForm: DT: handleSubmit: Adding: Error: ', err));
        }
    };

    render(){
        return(
            <>
                <form 
                    className='friend-form'
                    onSubmit={this.handleSubmit}
                >
                    <section className='group'>
                        <label htmlFor='name'>Name:</label>
                        <input
                            type='text'
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            id='name'
                            name='name'
                        />
                    </section>
                    <section className='group'>
                        <label htmlFor='age'>Age:</label>
                        <input
                            type='text'
                            value={this.state.formData.age}
                            onChange={this.handleChange}
                            id='age'
                            name='age'
                        />
                    </section>
                    <section className='group'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='text'
                            value={this.state.formData.email}
                            onChange={this.handleChange}
                            id='email'
                            name='email'
                        />
                    </section>
                    <button className='app-button'>{this.state.isEditing ? 'Update' : 'Add'}</button>
                </form>
            </>
        )
    }
};

export default withRouter(FriendForm);