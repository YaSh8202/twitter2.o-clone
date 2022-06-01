import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import {TwitterTimelineEmbed} from 'react-twitter-embed';

const Widgets = () => {
  return (
    <div className='  mt-2 px-2 col-span-2 hidden lg:inline' >
      <div className=' flex items-center space-x-2 bg-gray-100 mt-2 p-3 rounded-full' >
        <SearchIcon className='h-5 w-5 text-gray-400 ' />
        <input placeholder='Search Twitter' type="text" className="bg-transparent flex-1 outline-none " />
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="yashb1010"
        options={{ height: "100vh" }}
      />
    </div>
  )
}

export default Widgets