import React from 'react'
import Netflix from './../assets/Images/Netflix.webp'
import Primevideo from './../assets/Images/Primevideo.webp'
import disney from './../assets/Images/disney.png'
import Jiohotstar from './../assets/Images/Jiohotstar.webp'
import HBOmax from './../assets/Images/HBOmax.webp'

 
import starwarV from './../assets/Videos/star-wars.mp4'
import disneyV from './../assets/Videos/disney.mp4'
import marvelV from './../assets/Videos/marvel.mp4'
import nationalGeographicV from './../assets/Videos/national-geographic.mp4'
import pixarV from './../assets/Videos/pixar.mp4'


function ProductionHouse() {
    const productionHouseList=[
        {
            id:1,
            image:Netflix,
        },
        {
            id:2,
            image:Primevideo,
        },
        {
            id:3,
            image:disney,
        },
        {
            id:4,
            image:Jiohotstar,
        },
        {
            id:5,
            image:HBOmax,
        },
    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 '>
        {productionHouseList.map((item)=>(
            <div className='border-[3px] border-gray-600
            rounded-lg hover:scale-105 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800
            '>
            <video src={item.video} autoPlay loop playsInline muted 
            className='absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-50'/> 
            <img src={item.image} className='w-full z-[1] opacity-100' /> 
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse