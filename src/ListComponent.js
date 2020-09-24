import React from 'react';
import { connect } from 'react-redux'

import CardComponent from './CardComponent'


const ListComponent = ({ items }) => { //props.items

    
    return (
        <div>
            
        {items.map((item, index) => <CardComponent key={index} item={item}/>)} 
        </div>
    );
};

//what function gives access to store state?

const mapStateToProps = state => {
    return { items: state.items }
}

export default connect(mapStateToProps)(ListComponent);


