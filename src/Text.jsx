import React from 'react';
import Notfound from './Assets/Notfound.png';
export const Text = ({value}) => {
    const txt=(value>0)? "":"hidden";
  return (
    <div className=' w-80 absolute top-64  '>
    <img className={`${txt}`} src={Notfound} alt="Not found" />
    <div className={`${txt} font-serif font-bold text-2xl absolute`}>Oops!! No result found.</div>
    </div>
    )
}
