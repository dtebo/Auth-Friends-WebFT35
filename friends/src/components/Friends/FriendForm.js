import React, { Component } from 'react';

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
    };

    render(){
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        value={this.state.name}
                        onChange={this.handleChange}
                        id='name'
                        name='name'
                    />
                    <label htmlFor='age'>Age:</label>
                    <input
                        type='text'
                        value={this.state.age}
                        onChange={this.handleChange}
                        id='age'
                        name='age'
                    />
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='text'
                        value={this.state.email}
                        onChange={this.handleChange}
                        id='email'
                        name='email'
                    />
                    <button>{this.state.isEditing ? 'Update' : 'Add'}</button>
                </form>
            </>
        )
    }
};

export default FriendForm;