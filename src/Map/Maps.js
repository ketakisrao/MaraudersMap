import React from 'react';
import './Map.css';
import { Link } from 'react-router-dom';


export const items = [{
    name: "Hogwarts Castle",
    position: {
        top: "100px",
        left: "550px"
    },
    link: '/hogwarts-castle',
    des: 'Hogwarts Castle is a large, seven-story high building supported by magic, with a hundred and forty two staircases throughout its many towers and turrets and very deep dungeons. The castle was built in the late Early Middle Ages (c. 993) by a wizard architect and the four most celebrated wizards of the age: Godric Gryffindor, Helga Hufflepuff, Rowena Ravenclaw and Salazar Slytherin. The castle is the main building of Hogwarts School of Witchcraft and Wizardry, regarded as the finest wizarding school in the world. Hogwarts is built in a valley area — surrounding mountains are part of the landscape — with the fairly large Great Lake to the south of the main building.The huge main oak front doors leading into the Entrance Hall face the west, and open up to sloping lawns.The deep Forbidden Forest extends around to the west of the castle.There are also exterior greenhouses and vegetable patches on the school grounds.',
    img: "images/Hogwarts.png"
}, {
    name: "Hogsmeade",
    position: {
        top: "50px",
        left: "50px"
    },
    link: '/hogsmeade',
    des: 'Hogsmeade Village, or simply called Hogsmeade, is the only all-wizarding village in Britain. It was founded by Hengist of Woodcroft. Since before 1714 (when the 1714 Edict was passed), Hogwarts third years and above have been permitted weekend trips into the village. Mainly, students frequent the High Street in the village which contains the named specialty shops and pubs such as Zonko\'s Joke Shop and Honeydukes. Otherwise, they wander on to observe the infamous Shrieking Shack. Hogsmeade is a picturesque little village of cottages and shops, with enchanted candles hanging in the trees during the holidays.It is also near the location of the train station used by the Hogwarts Express.',
    img: "images/Hogsmeade.jpg"
},
{
    name: "Forbidden Forest",
    position: {
        top: "50px",
        right: "50px"
    },
    link: '/forbidden-forest',
    des: 'The Forbidden Forest, also known as the Dark Forest, borders the edges of the Hogwarts School of Witchcraft and Wizardry grounds. The forest is a very old place that holds many secrets and houses many creatures, some dark and dangerous, others friendly.The trees in the forest are considered ancient, they are dense and rough looking from years of exposure to the elements. As the forest\'s name suggests, it is strictly off limits to students — except in the case of detention, or Care of Magical Creatures lessons that occasionally take place there. Of course, with the various dangerous creatures living in the Forest, few students would even want to venture into it.',
    img: "images/ForbiddenForest.png"
},
{
    name: "Great Hall",
    position: {
        bottom: "50px",
        left: "50px"
    },
    link: '/great-hall',
    des: 'The Great Hall in the Hogwarts Castle was the main gathering area in the school, which was located off the Entrance Hall. It was a large hall where students and teachers dined and congregated. Three meals a day were hosted in this hall. The Great Hall was the main place where students received their meals and daily owl post.They also held certain special events, such as the Sorting Ceremony and the Hallowe\'en Feast.',
    img: "images/GreatHall.jpg"
},
{
    name: "Hagrid's Hut",
    position: {
        bottom: "50px",
        right: "50px"
    },
    link: '/hagrids-hut',
    des: 'Hagrids Hut served as a home to Rubeus Hagrid(and some of his pets, including Fang) during his years as gameskeeper and teaching at Hogwarts School of Witchcraft and Wizardry. It is a small wooden cabin located outside of Hogwarts Castle, on the edge of the Forbidden Forest.[3] Harry Potter, Hermione Granger and Ron Weasley were amongst the Hogwarts students who regularly visited Hagrid in his hut.',
    img: "images/HagridsHut.jpg"
},
{
    name: "Dumbledore's Office",
    position: {
        bottom: "0px",
        left: "600px"
    },
    link: '/dumbledores-office',
    des: 'This office is the office in Hogwarts Castle in which the current headmasters or headmistresses of Hogwarts School of Witchcraft and Wizardry work during the school year. It is located in the Headmasters Tower, accessed through Gargoyle Corridor.Although this is never mentioned, it is entirely likely that the residence of the headmaster is adjacent to the office.It is reached by means of a circular, moving stone staircase, which in turn is concealed by a gargoyle on the third floor.The gargoyle will step aside in response to a password, though the headmaster is capable of overriding the password if, for any reason, he or she desires that it will not work.',
    img: "images/Dumbledore'sOffice.jpg"
}];

if (!localStorage.getItem('likes'))
    localStorage.setItem('likes', [10, 15, 3, 25, 2, 9]);

const maps = props => {
    let c = 0;
    const map_items = items.map((item) => {
        return (
            <Link to={process.env.PUBLIC_URL + item.link}>
                <div className="map-item" style={item.position} key={c++}>
                    <img src={item.img} alt={item.img}></img>
                    <h3>{item.name}</h3>
                </div>
            </Link>
        )
    });
    return map_items;
}

export default maps