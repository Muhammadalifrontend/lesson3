import React, {useState} from 'react';
import "./style.scss"

const index = () => {
    // let number = 1;
    const [num, setNum]=useState(1)
    const [togle,setTogle]=useState(false)
    // const increment = () => {
    //     number += 1;
    //     console.log(number);
    // }
    return (
        <div>
            <h1>About{num}</h1>
            <button className='btn_add' onClick={()=>setNum(num+1)}>increment</button>
            <button className='btn_succes' onClick={()=>setTogle(true)}>OPEN</button>
            <button className='btn_danger' onClick={()=>setTogle(false)}>Close</button>
            <button className='btn_warning' onClick={()=>setTogle((e)=>!e)}>Toggle</button>
            <div className={togle? "card" : "card swipe"}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magnam ea nihil reiciendis maiores. Neque, aliquid. Deserunt sequi natus consequatur modi ab ex at repellendus delectus! Numquam porro non, saepe maxime quia eum aliquam consequatur consequuntur ipsa natus quis, adipisci illo quisquam ea nisi aliquid sint iure nostrum nam voluptatem.</p>
            </div>
        </div>
    );
};

export default index;   