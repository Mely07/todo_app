import React, { Component, useDebugValue } from 'react';

import ListComponent from './ListComponent'
import FormComponent from './FormComponent';

const todo = [{title: 'create a React app', content: 'pretend content', deadline:'09092020'}, {title: 'example todo', content:'example content', deadline:'09102020'}]

class App extends Component {
    constructor (props){
        super(props)
        this.state = {
            items: []
        }
    }

    componentDidMount (){
        this.setState({
            items: todo
        })
    }

    addTodo = (todo) => {
        this.setState({
            ...this.state,
            items: [...this.state.items, todo]
        })
    }

    render() {
        console.log(this.state.items)
        return (
            <div>               
                <ListComponent items={this.state.items}/>
                <FormComponent addTodo={this.addTodo} />
            </div>
        );
    }
}

export default App;