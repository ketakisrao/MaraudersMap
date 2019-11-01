import React, { useState } from 'react';
import './Beans.css';


const bean_flavors = ["Almond", "Apple", "Aubergine", "Bacon", "Baked Bean", "Banana", "Belly button lint",
    "Blackberry", "Beef casserole", "Black Pepper", "Blueberry", "Blueberry Pie>", "Bogey",
    "Bouillabaisse", "Broccoli", "Bubble-gum", "Buttered", "Cauliflower", "Cheese", "Cherry",
    "Chicken", "Chilli", "Chilli", "Chocolate", "Chocolate cake", "Cinnamon", "Coconut", "Coffee",
    "Cranberry", "Cream Puff", "Curry", "Dirt", "Dirt Sock", "Dog Food", "Earthworm", "Earwax", "Éclair",
    "Envelope Glue", "Farm Dirt", "Feet", "Fish", "Fried egg", "Grape Jelly",
    "Grapefruit", "Grass", "Gravy", "Green apple", "Ham", "Honey",
    "Horseradish", "Ketchup", "Lemon", "Liver", "Liver & Tripe", "Lobster",
    "Marmalade", "Marshmallow", "Mashed Potatoes", "Mint", "Mushroom", "Mussel", "Mustard",
    "Olive", "Onion", "Orange", "Overcooked cabbage", "Peach", "Pear", "Pepper", "Peppermint", "Phlegm", "Pink Grapefruit",
    "Pizza", "Prawn", "Pumpkin", "Roast beef", "Rotten egg", "Salmon", "Sardine", "Sausage", "Sherry", "Soap",
    "Spaghetti", "Spinach", "Sprout", "Steak", "Strawberry", "Strawberry & Peanut Butter Ice-Cream", "Sugared Violet",
    "Sulphur", "Toast", "Toffee", "Toffee", "Toffee", "Tomato", "Tripe", "Troll bogey",
    "Tutti-fruiti", "Vanilla Ice cream", "Vomit", "Watermelon"];
function Beans() {
    let [bean, setCount] = useState(0);
    function getBean() {
        var i = parseInt((Math.random() * 110)) % 101;
        bean = "You got: " + bean_flavors[i] + "!";
        setCount(bean);
    }
    return (
        <div className="beans">
            <h3>Bertie Botts Every Flavor Beans</h3>
            <img src="/images/gumball.gif" />
            <div>
                <button onClick={getBean}>Get My Bean!</button>
                <br />
                <h2>{bean}</h2>
            </div>
        </div>
    );
}
export default Beans