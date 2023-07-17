import React from 'react';
import HeroImage from "../assets/heroimage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b
             text-white' style = {{backgroundColor: 'black'}}>

        <div className='max-w-screen-lg mx-auto flex flex-col items-center 
                        justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Full Stack
                    Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I'm a Full Stack Developer with a background in Computer Science and Engineering.
                     I'm skilled in Javascript, Node.js, React.js, Express.js, MongoDB, MySQL, Git,
                     Firebase
                </p>
                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 
                             flex items-center rounded-md bg-gradient-to-r from-cyan-500
                             to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>  
                        </span>
                      
                    </button>
                </div>
            </div>

            <div>
                <img src={HeroImage}  
                alt="my profile" 
                className='rounded-2xl mx-auto md:w-full'style={{width: '500px'}}/>
            </div>
        </div>
    </div>
  )
}

export default Home