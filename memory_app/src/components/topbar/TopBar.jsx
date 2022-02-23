import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import "./topbar.css"

const TopBar = () => {

    function writeDiary(){
        Navigate("/write-diary");
    }

    function readDiary(){
        Navigate("/diary");
    }




    return(
        <div className='top'>
            <ul className='topList'>
            <li className='topListItem'>Home</li>
                <li className='topListItem'><Link to={"/diary"} className="topLink" style={{ textDecoration: 'none' }}>Diary</Link></li>
                <li className='topListItem'><Link to={"/write-diary"} className="topLink" style={{ textDecoration: 'none' }}>Write</Link></li>
                <li className='topListItem'><Link to={"/gallary"} className="topLink" style={{ textDecoration: 'none' }}>Gallary</Link></li>
            </ul>
        </div>

    );

};

export default TopBar;