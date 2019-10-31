import React from 'react';
import './Map.css';


const items = [{
    name: "Hogwarts Castle",
    position: {
        top: "100px",
        left: "550px"
    },
    img: "images/Hogwarts.png"
}, {
    name: "Hogsmeade",
    position: {
        top: "50px",
        left: "50px"
    },
    img: "images/Hogsmeade.jpg"
},
{
    name: "Forbidden Forest",
    position: {
        top: "50px",
        right: "50px"
    },
    img: "images/ForbiddenForest.png"
},
{
    name: "Great Hall",
    position: {
        bottom: "50px",
        left: "50px"
    },
    img: "images/GreatHall.jpg"
},
{
    name: "Hagrid's Hut",
    position: {
        bottom: "50px",
        right: "50px"
    },
    img: "images/HagridsHut.jpg"
},
{
    name: "Dumbledore's Office",
    position: {
        bottom: "0px",
        left: "600px"
    },
    img: "images/Dumbledore'sOffice.jpg"
}];

const maps = props => {
    let c = 0;
    const map_items = items.map((item) => {
        return (
        <div className="map-item" style={item.position} key={c++}>
            <img src={item.img} alt={item.img}></img>
            <h3>{item.name}</h3>
        </div>
        )
    });
    return map_items;
}
export default maps