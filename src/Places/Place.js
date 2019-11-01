import React, {useState} from 'react';
import './Place.css';
import { Router, useParams, Link } from "react-router-dom";
import { items } from '../Map/Maps';

function Place()
{
    let { id } = useParams();
    let [count, setCount] = useState(0);
    let i = items.findIndex(k => k.link == ('/' + id));
    let obj = items[i];
    console.log(id);
    console.log(obj);

    var likes_array = localStorage.getItem('likes').split(',');
    count = likes_array[i];
    function like() {
        var likes = localStorage.getItem('likes').split(',');
        likes[i]++;
        count = likes[i];
        setCount(count);
        localStorage.setItem('likes', likes);
    }
    
    return (
        <div className="place">
            <div className="back-btn"><Link to={process.env.PUBLIC_URL + '/'}><button>&#8678;</button></Link></div>
            <h2>{obj.name}</h2>
            <img src={obj.img}></img>
            <div className="like"><span onClick={like}>UpVotes: {count} <button>&#8679;</button></span></div>
            <p>{obj.des}</p>
        </div>
    );
}
export default Place