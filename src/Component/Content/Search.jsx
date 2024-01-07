import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const Search = ({data, searchValue}) => {
    const navigate = useNavigate();

    const clickdetails=(car)=>{
    navigate('/detailvehicle', {state:{data:car}});
    console.log(car)
    }

    console.log('search',data)
    console.log(searchValue)
    return (
    <div>
        <div className='flex flex-col'>    
        {data.map((item, itemIndex) => (
        <div key={itemIndex} className='flex flex-col items-center justify-center w-full'>
            {item.car_type.map((car, carIndex) => {
            // Cek apakah car.vehicle sama dengan searchValue
            if (car.vehicle === searchValue) {
                return (
                    <div key={`${itemIndex}-${carIndex}`} className='flex items-center justify-between w-full h-full p-12'>
                        <div  onClick={()=>clickdetails(car)}
                         className='flex items-center cursor-pointer justify-center mr-10 p-7 bg-gradient-to-br from-slate-800 bg-opacity-70 shadow-xl shadow-black rounded-xl'>             
                            <img src={`${car.imageURL}`} alt="" width={450} className=' hover:scale-105 duration-100'/>
                        </div>
                        <div className='flex flex-col w-full p-5 min-h-56 bg-black/80 text-white rounded-lg shadow-md shadow-black '>
                            <h1 className='font-bold text-xl underline underline-offset-2 pb-3 flex justify-center'>Description</h1>
                            <h1>Name Car : {car.vehicle}    </h1>
                            <ul>
                                {car.description.map((desc, descIndex)=>{
                                    return(
                                        <li key={`${itemIndex}-${carIndex}-${descIndex}`}>{desc}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    );
                } else {
                    return null;
                }
                })}
            </div>
            ))}

            </div>   
    </div>
  )
}

export default Search