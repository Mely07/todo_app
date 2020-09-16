import React from 'react';

const CardComponent = (props) => {
    return (
        <div>
            <ul>
                <li>{props.item.title}</li>
                <li>{props.item.content}</li>
                <li>{props.item.deadline}</li>
            </ul>
        </div>
    );
};

export default CardComponent;