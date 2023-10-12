import React from 'react'

export const SliderItem = ({cover,className}) => {
    return (
        <div className={`${className} flex justify-center items-center max-[450px]:max-w-[150px] max-[450px]:h-[250px] lazy`}>
            <figure className="w-full h-full max-[450px]:w-[150px] max-[450px]:h-[250px]">
                <img className="w-full h-full" src={cover} alt="" />
            </figure>
        </div>
    )
}
