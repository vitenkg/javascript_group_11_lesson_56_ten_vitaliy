import React from 'react';

const Ingredient = props => {
    return (
            <>
                <li><p className="name" onClick={() => props.onIngredientClick(props.name)}>{props.name}</p><p
                    className="incr">x{props.count}</p><p className="erase" onClick={()=> props.onEraseClick(props.name)}>erase</p></li>
            </>
    );
};

export default Ingredient;