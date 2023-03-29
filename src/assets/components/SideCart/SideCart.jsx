import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import './SideCart.css'

const SideCart = ({watchTime}) => {

    const [time, setTime] = useState(watchTime);
    const [breakTime, setBreakTime] = useState(0);

    useEffect(()=>{
        const getWatchTimeFromLStorage = localStorage.getItem('watchTime');
        setTime(getWatchTimeFromLStorage);
        const getBreakTimeFromLStorage = localStorage.getItem('breakTime');
        setBreakTime(getBreakTimeFromLStorage);
    },[watchTime]);

    // function for break time
    const handleBreakTime = (bt) => {
        localStorage.setItem('breakTime', bt);
        setBreakTime(bt);
        // console.log(bt);
    };

    // click complete btn for Toast
    const handleCompleteBtn = () =>{
        toast('wow!!!!!!!!')
    }

    return (
        <div>
            <div className="cart-container">
                <h1>My Cart</h1>

                <div className="mt-5 text-center">
                    <h4>Total Watch Time</h4>
                    <input className='p-3' type="text" value={time} name="" id="" disabled />
                </div>
                <h5 className='mt-5'>Add Break Time</h5>
                <button onClick={()=>handleBreakTime(10)} className="w-25 btn-circle m-1 py-4 px-2 text-dark bold btn btn-info">10</button>
                <button onClick={()=>handleBreakTime(25)} className="w-25 btn-circle m-1 py-4 px-2 text-dark bold btn btn-warning">15</button>
                <button onClick={()=>handleBreakTime(20)} className="w-25  btn-circle m-1 py-4 px-2 text-dark bold btn btn-danger">20</button>
                <input className='mt-3 p-3' type="text" name="" id="" value={breakTime} disabled />
                <button onClick={handleCompleteBtn} className="mt-5 btn btn-success w-100">Complete</button>
            </div>
        </div>
    );
};

export default SideCart;