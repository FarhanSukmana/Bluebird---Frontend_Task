import React from 'react'
import logo from '../img/Logo.png'
import { BsFacebook,BsInstagram, BsTiktok, BsTwitter,BsLinkedin,BsYoutube } from "react-icons/bs";



const Footer = () => {
  return (
    <div className='w-full h-full bg-[#2f5296] mt-10'>
        <div className='w-full h-full grid grid-cols-4 p-8 gap-10    '>
            <div className='pl- text-white flex flex-col justify-center'>
                <img src={logo} alt="" className='w-[300px]' />
                <h1 className='text-2xl font-bold'>Kantor Pusat</h1>
                <a href="">Jl. Mampang Prapatan Raya No. 60, Jakarta 12790</a>
            </div>
            <div className=' flex flex-col  justify-center text-white'>
                <h1 className='text-2xl font-bold pb-4'>Tentang Kami</h1>
                <a href="">Profile Perusahaan</a>
                <a href="">Sejarah</a>
                <a href="">Visi Misi</a>
                <a href="">Pesan Pendiri</a>
            </div>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-2xl font-bold pb-4'>Produk</h1>
                <a href="">Layanan Taksi</a>
                <a href="">Sewa Mobil</a>
                <a href="">Carter/Sewa Bus</a>
                <a href="">Iklan Mobil</a>
            </div>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-2xl font-bold pb-4'>Hubungi Kami</h1>
                <div className='flex gap-3'>
                    <a href=""><BsFacebook size={20}/></a>
                    <a href=""><BsInstagram size={20}/></a>
                    <a href=""><BsLinkedin size={20}/></a>
                    <a href=""><BsYoutube size={20}/></a>
                    <a href=""><BsTwitter size={20}/></a>
                    <a href=""><BsTiktok size={20}/></a>
                </div>
            </div>
        </div>
        <div className='w-full h-fit bg-blue-400 flex items-center justify-center text-white'>
           <h1>© 2024 Muhammad Farhan Sukmana. All Rights Reserved.</h1>
        </div>    
    </div>
  )
}

export default Footer