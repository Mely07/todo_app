import React, { Component } from 'react';

class FormComponent extends Component {

    state = {
        title: '' ,
        content: '' ,
        deadline: ''
    }

    handleChange = (e) => {
        let name = e.target.name
        this.setState({[name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                title<input type="text" value={this.state.title} onChange={this.handleChange} name="title"/>
                content<input type="text" value={this.state.content} onChange={this.handleChange} name="content"/>
                deadline<input type="date" value={this.state.deadline} onChange={this.handleChange} name="deadline"/>
                <input type="submit" value="create todo"/>
            </form>

        );
    }
}

export default FormComponent;


// item that user submits ?? reduxland

//when submitted we need to dispatch an action 