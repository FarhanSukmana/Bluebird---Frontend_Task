import React from 'react'
import { useState } from 'react';
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Mybook = () => {
    const navigate = useNavigate();
    const bookData = useSelector((state) => state.book.bookCars)
    const [totalPrice, setTotalPrice]=useState('')
    console.log(bookData)
    const clickdetails=(car)=>{
        navigate('/detailvehicle', {state:{data:car}});
        console.log(car)
    }

    const calculateTotalPrice = () => {
        const total = bookData.reduce((acc, car) => acc + parseFloat(car.price.replace(/[^0-9.-]+/g, '')), 0);
        return total.toLocaleString('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        });
      };
  return (
    <div className='w-full h-full flex flex-col gap-5 items-center justify-center'>
        {bookData.map((car, index) =>(
        <div key={index} className='flex w-[80%] h-[240px] '>                
            <div onClick={()=>clickdetails(car)}
            className='w-[60%] h-full flex items-center justify-center '>
                <img src={ `${car.imageURL}`} alt="" className='bg-gradient-to-b from-gray-900 p-3 rounded-lg shadow-lg shadow-gray-800 hover:scale-105 duration-100 cursor pointer' />
            </div>
            <div className='w-[40%] h-full flex flex-col  items-center justify-around'>
                <h1 className='p-4 bg-zinc-700 font-bold text-white rounded-md shadow-md shadow-black'>{car.vehicle}</h1>
                <h1 className='bg-amber-500 p-4 rounded-lg font-semibold shadow-md shadow-amber-900'>{car.price}</h1>
            </div>
        </div>
    ))}
    
    <div>
        <h1 className='p-4 bg-blue-400 rounded-md shadow-xl shadow-black font-bold'>TOTAL PRICE :{calculateTotalPrice()}</h1>
    </div>
    </div>
  )
}

export default Mybook