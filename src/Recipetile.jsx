import React from 'react';

export default function Recipetile({recipe}) {
  return (
    <div className='border border-black rounded-lg shadow-xl m-4 bg-white '>
        <img className='mx-auto my-3 object-cover w-[300px] h-[300px]  ' src={recipe["recipe"]["image"]} />
        <p className=' w-[300px] font-serif text-center m-4 text-lg font-bold '>{recipe["recipe"]["label"]}</p>
        <a href={recipe["recipe"]["url"]}><p className='font-serif py-2 text-center text-blue-800 font-semibold '>Get Recipe</p> </a>
    </div>
  )
}
