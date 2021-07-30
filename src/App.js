import React, {useState} from "react";
import Burger from "./Components/Burger/Burger";
import './App.css';
import Ingredient from "./Components/Ingredient/ingredient";
import TotalPrice from "./Components/TotalPrice/TotalPrice";

const App = () => {
    const [ingredients, setIngredients] = useState([
            {
                name: 'Salad',
                count: 0,
                id: 0,
                price: 5,
            },
            {
                name: 'Cheese',
                count: 0,
                id: 1,
                price: 20,
            },
            {
                name: 'Meat',
                count: 0,
                id: 2,
                price: 50,
            },
            {
                name: 'Bacon',
                count: 0,
                id: 3,
                price: 30,
            },
        ])
    ;

    const [total, setTotal] = useState(0);

    const increase = name => {
        setIngredients(ingredients.map(prev => {
            if (name === prev.name) {
                setTotal(total + prev.price);
                return {
                    ...prev,
                    count: prev.count + 1
                };
            }
            return prev
        }));
    };

    const decrease = name => {
        setIngredients(ingredients.map(prev => {
            if (name === prev.name) {
                if (prev.count > 0) {
                    setTotal(total - prev.price);
                    return {
                        ...prev,
                        count: prev.count - 1
                    };
                }
            }
            return prev
        }));
    };

    const ingredientsComponents = ingredients.map((ingred) => (
            <Ingredient
                key={ingred.id}
                ingredients={ingredients}
                name={ingred.name}
                count={ingred.count}
                onIngredientClick={increase}
                onEraseClick={decrease}
            />
        )
    );

    const burgerDraw = ingredients.map(ingred =>
        <Burger
            key={ingred.id}
            ingredients={ingred}
        />
    );

    return (
        <div className="Constructor" style={{width: '1000px'}}>
            <ul style={{width: '250px'}}>
                <li><p className="name" style={{fontSize: '12px'}}>Ingredients</p><p className="incr"
                                                                                     style={{fontSize: '12px'}}>QTY</p>
                    <p className="erase"></p></li>
                {ingredientsComponents}
            </ul>
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                {burgerDraw}
                <div className="BreadBottom"></div>
            </div>
            <TotalPrice price={total}/>
        </div>
    )
};

export default App;
