import cooking from './Assets/cooking.png'
import React from 'react'

export const Landingimg = ({image}) => {
    const imgshow=image>0?"hide":"show";
  return (
    <div>  
        <img className={`${imgshow} absolute top-[30%] left-[20%] md:left-[30%] lg:left-[40%] w-[300px] h-[400px]`} src={cooking} alt="" /> 
    </div>
  );
};
