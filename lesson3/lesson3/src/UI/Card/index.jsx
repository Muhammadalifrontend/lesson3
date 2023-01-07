import React from 'react';
import "./style.scss"

const index = (props) => {
   const {data:{avatar, email, first_name,status, last_name}}=props;
   console.log(props);
    return (
        <div className='card'>
            <img src={avatar} alt="rasm" className='card_img' />
            <div className="card_body">
                <h3 className='card_title'>{first_name}{last_name}</h3>
                <p className="card_text">{email}</p>
                <button className={status ? "color" :"color2"}>{status ? "Online":"Ofline"}</button>
            </div>
        </div>
        
    );
};
export default index;