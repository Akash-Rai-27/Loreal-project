import React from 'react'
import background from '../../images/backgroundImage.png';

import Header from './Header';
import CamFrame from './CamFrame';
import { FaHome } from "react-icons/fa";

import girlImage from '../../images/right-img.png'


function Page() {


  return (
    <>
        <div className='h-screen flex flex-row flex-wrap ' 
            style={{backgroundImage: `url(${background})`, objectFit:'cover'}} >


            <Header />

            <div className='flex flex-wrap flex-row w-full bg-teal-00 justify-center items-center h-auto text-white text-4xl hidden sm:flex'>
                {/* <img src={dreamImage}  width={200} height={300}/> */}
                <FaHome/><span>Home</span>
            </div>



            <CamFrame/>



            <div className='hidden sm:flex bg-yellow-00 justify-end

            sm:basis-1/3 absolute h-full right-0
            '>
              <img 
                src={girlImage} alt='rightimg' 
              />
            </div>
            
        </div>
    </>
  )
}

export default Page