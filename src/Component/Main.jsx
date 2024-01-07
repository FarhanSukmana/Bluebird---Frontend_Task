import React, { useEffect, useState, useRef } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Routes, Route, useNavigate } from 'react-router-dom';
import { fetchData } from '../Fetching/fetch'
import Home from './Content/Home'
import Wishlist from './Content/Wishlist'
import Mybook from './Content/Mybook'
import Search from './Content/Search'
import { Link} from 'react-router-dom';
import DetailVehicle from './Content/DetailVehicle';


const Main = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data.data);
    const [category, setCategory] = useState();
    const [type, setType] = useState();
    const [loading, setLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const inputRef = useRef('mobil');

    const handleInputChange = (e) => {
      setSearchValue(e.target.value);
    };

    useEffect(() => {
      const fetchDataAndSetState = async () => {
        try {
          await dispatch(fetchData());
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false); 
        }
      };
  
      if (!category && !type) {
        fetchDataAndSetState();
      }
    }, [dispatch, category, type]);
   
    if (loading) {
      return <div>Loading...</div>;
    }

    const btn=(id,tipe)=> {
        setCategory(data.category[id])
        setType(data.type[tipe])
    }

    console.log(data)

  return (
    <>
    <div className='w-full h-full flex flex-col items-center justify-center'>
        <div className='flex px-2 items-center justify-center mt-4'>
          <input type="text"
          value={searchValue} 
          onChange={handleInputChange}
          ref={inputRef}
          className="bg-gray-400 p-2 text-gray-800 rounded-xl "/>
          <Link to='/search'>
            <button className='p-2 ml-2 bg-gray-600 rounded-lg text-white'>cari</button>
          </Link>
        </div>
    
          <div className='w-fit h-fit grid grid-cols-4 gap-4 items-center justify-between py-7 font-semibold'>
            <div onClick={()=>{btn(0,0)}}
            className='flex flex-col  bg-blue-200 py-2 px-5 bg-opacity-70 shadow-lg hover:shadow-blue-600 hover:bg-blue-400 rounded-lg cursor-pointer transform transition hover:scale-105 duration-100 items-center justify-center '>
                <h1>{data.category[0].name}</h1>
                <img src='https://www.bluebirdgroup.com/img/armadaservicetype/626901eccdb74.png?w=127' alt="car reental logo" className=''/> 
                {/* Menggunakan URL karena di data API tidak dapat diakses(terdapat space setelah https) */}
            </div>

            <div onClick={()=>{btn(1,3)}}
            className='flex flex-col bg-blue-200 py-2 px-5 bg-opacity-70 shadow-lg hover:shadow-blue-600 hover:bg-blue-400 rounded-lg cursor-pointer transform transition hover:scale-105 duration-100 items-center justify-center '>
                <h1>{data.category[1].name}</h1>
                <img src={`${data.category[1].imageURL}`} alt="" className=''/>
            </div>

            <div onClick={()=>{btn(3,2)}}
            className='flex flex-col bg-blue-200 py-2 px-5 bg-opacity-70 shadow-lg hover:shadow-blue-600 hover:bg-blue-400 rounded-lg cursor-pointer transform transition hover:scale-105 duration-100 items-center justify-center '>
                <h1>{data.category[3].name}</h1>
                <img src={`${data.category[3].imageURL}`} alt="" className=''/>
            </div>

            <div onClick={()=>{btn(2,1)}}
            className='flex flex-col bg-blue-200 py-2 px-5 bg-opacity-70 shadow-lg hover:shadow-blue-600 hover:bg-blue-400 rounded-lg cursor-pointer transform transition hover:scale-105 duration-100 items-center justify-center '>
                <h1>{data.category[2].name}</h1>
                <img src={`${data.category[2].imageURL}`} alt="" className=''/>
            </div>
        </div>     
    </div>
    <div>
      <Routes>
        <Route path="/" element={<Home data={data} category={category} type={type} />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/mybook" element={<Mybook />} />
        <Route path="/search" element={<Search data={data.type} searchValue={searchValue} />}/>
        <Route path="/detailvehicle" element={<DetailVehicle />}/>
      </Routes>
    </div>

    </>
  ) 
}

export default Main