import React from 'react'
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon
} from '@heroicons/react/outline'
import SideBarRow from './SideBarRow'


function SideBar() {
  return (
    <div className='flex flex-col col-span-2 items-center px-4 md:items-start' >
      <img className='m-3 h-10 w-10' alt='twitter' src="https://links.papareact.com/drq" />
      <SideBarRow title="Home" Icon={HomeIcon} />
      <SideBarRow title="Explore" Icon={HashtagIcon} />
      <SideBarRow title="Notifications" Icon={BellIcon} />
      <SideBarRow title="Messages" Icon={MailIcon} />
      <SideBarRow title="Bookmarks" Icon={BookmarkIcon} />
      <SideBarRow title="Lists" Icon={CollectionIcon} />
      <SideBarRow title="Sign In" Icon={UserIcon} />
      <SideBarRow title="More" Icon={DotsCircleHorizontalIcon} />
    
    </div>
  )
}

export default SideBar