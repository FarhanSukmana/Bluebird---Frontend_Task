import React from 'react'
import { useLocation } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { addBookCar, addLikedCar } from '../../Fetching/action';


const DetailVehicle = () => {
    const dispatch = useDispatch();
    const carState = useSelector((state) => state.car);
    const bookState = useSelector((state => state.book));
    const { state } = useLocation();
    const car = state.data;
    const handleCopyToClipboard = () => {
        const urlToCopy = window.location.href;
            navigator.clipboard.writeText(urlToCopy)
          .then(() => {
            console.log('URL copied to clipboard:', urlToCopy);
          })
          .catch((error) => {
            console.error('Failed to copy URL to clipboard:', error);
          });
      };

console.log(bookState)
      const handleBookClick=(car)=>{
        const bookData = car;
        dispatch(addBookCar(bookData))
      }

      const handleLikeClick = (car) => {
        console.log(car);      
        const carData = car;
        dispatch(addLikedCar(carData));
      };
console.log(carState)
  return (
    <div className='flex w-full h-full'>
        <div className='flex w-full h-full mx-4 items-center justify-center'>
            <div>
                <div className='flex w-full items-center justify-center mr-10 p-7 bg-gradient-to-br from-slate-800 bg-opacity-70 shadow-md shadow-black rounded-xl'>
                    <img src={`${car.imageURL}`} alt=""  />
                </div>
                <div className='flex w-full items-center justify-center px-10'>
                    <button onClick={()=>{handleCopyToClipboard()}}
                    className='px-5 py-2 bg-blue-400 mx-10 mt-2 font-medium rounded-lg'>Share</button>
                    <button onClick={()=>{handleLikeClick(car)}}
                    className='px-5 py-2 bg-red-400 mx-10 mt-2 font-medium rounded-lg'>Like</button>
                </div>
            </div>

            <div className='ml-12 h-54 text-gray-300 items-center justify-center'>
                <div className='p-5  h-52 bg-slate-600 rounded-xl'>
                    <h1 className='font-bold text-xl underline underline-offset-2 pb-3 flex justify-center'>Description</h1>
                    <h1>Name Car : {car.vehicle}</h1>
                    <ul >
                        {car.description.map((desc, descIndex)=>{
                        return(
                            <li key={descIndex}>{desc}</li>                                )
                        })}
                    </ul>
                </div>
                <div className='flex w-full items-center justify-between px-10'>
                    <button className='px-5 py-2 w-[30%] bg-amber-500 mx-10 mt-2 font-medium rounded-lg'>{car.price}</button>
                    <button onClick={()=> {handleBookClick(car)}}
                    className='px-5 py-2 w-[70%] bg-[#2f5296] mx-10 mt-2 font-medium rounded-lg'>Book</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailVehicle