import React, { Component } from 'react';

import ListComponent from './ListComponent'

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

    render() {
        return (
            <div>               
                <ListComponent items={this.state.items}/>
            </div>
        );
    }
}

export default App;