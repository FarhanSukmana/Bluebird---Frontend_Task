import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import {Routes, Route, useNavigate } from 'react-router-dom';
import { Link} from 'react-router-dom';
import DetailVehicle from './DetailVehicle';


const Home = ({ data,category, type }) => {
    console.log(category)
    console.log(data)
    const navigate = useNavigate();

    const clickdetails=(car)=>{
    navigate('/detailvehicle', {state:{data:car}});
    console.log(car)
    }

  return (
    <div>
      {category && type ?   (
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <h1 className='text-2xl my-6'>Pilihan Kendaraan</h1>
            
            <div className='w-[90%] h-full grid grid-cols-3 gap-6'>    
                {type.car_type.map((car, index) => (
                   <div
                   key={index}
                   className='flex flex-col items-center justify-center'>
                   <div className='bg-neutral-900 bg-opacity-40 p-4 rounded-md shadow-lg shadow-black'>
                     <img onClick={()=>clickdetails(car)}
                       className='cursor-pointer transform transition hover:scale-105 duration-75'
                       src={car.imageURL}
                       alt=''/>
                   </div>
                   <h1
                     key={index}
                     className='p-2 mt-7 bg-blue-400 my-2 w-[305px] text-center font-medium flex items-center justify-between'>
                     {car.vehicle} <span><CiHeart/></span>
                   </h1>
                 </div>
                ))}
            </div>
           
        </div>
      ):(
        <div className='w-full h-fit items-center flex flex-col text-2xl justify-center mt-16 shadow'>
            <h1>SELAMAT DATANG</h1>
            <h1>Pilih Layanan Kami... </h1>
        </div>
      )}
    </div>
  );
};

export default Home;
