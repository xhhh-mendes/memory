import React from 'react';
import './singlepost.css'

const SinglePostComp = (props) => {

    return(
        <div className='card_post'>
            <span className='post_title'>
                {props.createTime}
            </span>
            <p className='post_content'>
                {props.content}
            </p>
        </div>
    );
};

export default SinglePostComp;