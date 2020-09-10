import React from 'react';
import CardComponent from './CardComponent'

const ListComponent = (props) => {
    console.log(props)
    return (
        <div>
            
        {props.items.map((item, index) => <CardComponent key={index} item={item}/>)} 
        </div>
    );
};

export default ListComponent;