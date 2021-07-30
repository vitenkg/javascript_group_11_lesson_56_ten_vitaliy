import React from 'react';
import './Burger.css';

const Burger = props => {
    console.log(props);
    let element = [];
    for (let i = 0; i < props.ingredients.count; i++) {
        console.log(i);
        element[i] = <div className={props.ingredients.name}></div>
    }

return element.map(draw => (
        <>
            {draw}
        </>
    )
)
};

export default Burger;