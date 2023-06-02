import React from 'react';
import { earningData } from "../data/data/dummy";

const Card = () => {
  return (
    <>
    <div className='flex  m-3 flex-wrap justify-center gap-1 items-center space-y-4 md:space-y-4  '>
    {earningData.map((item) => {
        return (
            
       <div key={item.title} className={`p-6 w-full sm:mx-auto ${item.bgColor} rounded-xl shadow-lg flex items-center space-x-4  dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 `}>
        <div className="shrink-0">
            <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"   >
                    {item.icon}
            </button>
        </div>
        <div>
            <div className="text-xl font-medium text-black">{item.title}</div>
            <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                {item.percentage}
                </span>
            </p>
        </div>
      </div> 
        )
    } )}
  </div>
   
    </>
  )
}

export default Card