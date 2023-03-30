import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import './SideCart.css'

const SideCart = ({watchTime}) => {

    const [time, setTime] = useState(0);
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
        toast(time - breakTime,'min')
    }

    return (
        <div className='pt-5 sticky-top '>
            <div className="cart-container ">
                <div className="mt-5 text-center">
                    <h2>Total Watch Time</h2>
                    <input className='p-3 rounded' type="text" value={time} name="" id="" disabled />
                </div>
                <h5 className='mt-5'>Break Time</h5>
                <button onClick={()=>handleBreakTime(10)} className="w-25 btn-circle m-1 py-4 px-2 text-dark bold btn btn-info">10</button>
                <button onClick={()=>handleBreakTime(15)} className="w-25 btn-circle m-1 py-4 px-2 text-dark bold btn btn-warning">15</button>
                <button onClick={()=>handleBreakTime(20)} className="w-25  btn-circle m-1 py-4 px-2 text-dark bold btn btn-danger">20</button>
                <input className='mt-3 p-3 rounded' type="text" name="" id="" value={breakTime} disabled />
                <button onClick={handleCompleteBtn} className="mt-5 btn btn-success w-75">Complete</button>
            </div>
        </div>
    );
};

export default SideCart;