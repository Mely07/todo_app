import React, { Component, useDebugValue } from 'react';

import ListComponent from './ListComponent'
import FormComponent from './FormComponent';

class App extends Component {

    render() {
     
        return (
            <div>               
                <ListComponent />
                <FormComponent  />
            </div>
        );
    }
}

export default App;