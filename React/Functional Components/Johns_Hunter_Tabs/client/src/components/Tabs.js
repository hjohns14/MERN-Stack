import React from 'react'

const Tabs = (props) => {
    const {content, onClick:handleTabs} = props

    
    return (
        <div>
        <div className="flex justify-center">
            <button className='text-lg border-x border-t border-solid w-24 text-center transition ease-in duration-300 
            hover:duration-400 hover:ease-in-out hover:bg-gray-500 hover:text-blue-300 focus:bg-black focus:text-white relative' 
            onClick={handleTabs} value="1">Tab 1</button>
            <button className='text-lg border-t border-solid w-24 text-center transition ease-in duration-300 
            hover:duration-400 hover:ease-in-out hover:bg-gray-500 hover:text-blue-300 focus:bg-black focus:text-white relative' 
            onClick={handleTabs} value="2">Tab 2</button>
            <button className='text-lg border-x border-t border-solid w-24 text-center transition ease-in duration-300 
            hover:duration-400 hover:ease-in-out hover:bg-gray-500 hover:text-blue-300 focus:bg-black focus:text-white relative' 
            onClick={handleTabs} value="3">Tab 3</button>
        </div>
        <div className='border border-solid w-[18rem] h-48'>
            {content}
        </div>
        
        </div>
    )
}

export default Tabs