import React, { useRef, useState } from 'react'
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon
} from '@heroicons/react/outline'
import { useSession } from 'next-auth/react';
import { TweetBody } from '../typing';

const TweetBox = () => {
  const [input, setInput] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const { data: session } = useSession();
  const [imageUrlisOpen, setImageUrlIsOpen] = useState<boolean>(false)
  const imageInputRef = useRef<HTMLInputElement>(null);

  const addImageToTweet = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!imageInputRef.current?.value) return
    setImage(imageInputRef.current.value)
    imageInputRef.current.value = ''
    setImageUrlIsOpen(false);
  }

  const postTweet = async () => {
    const tweetInfo: TweetBody = {
      text: input,
      username: session?.user?.name || 'Unknown User',
      profileImg: session?.user?.image || 'https://links.papareact.com/gll',
      image: image
    }
    const result = await fetch(`/api/addTweet`, {
      body: JSON.stringify(tweetInfo),
      method: 'POST'
    })
    const json = await result.json();
    
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

  }

  return (
    <div className='flex space-x-2 p-5' >
      <img className='mt-4 h-14 w-14 object-cover rounded-full' src={session?.user?.image || 'https://links.papareact.com/gll'} alt="profile pic" />

      <div className='flex flex-1 items-center pl-2 ' >
        <form className='flex flex-1 flex-col' >
          <input value={input} onChange={(e) => { setInput(e.target.value) }} className=" h-24 w-full text-xl outline-none placeholder:text-xl" type="text" placeholder="What's Happening?" />
          <div className='flex items-center ' >

            <div className='flex-1 flex space-x-2 text-twitter' >
              <PhotographIcon onClick={() => setImageUrlIsOpen(!imageUrlisOpen)} className='h-5 w-5 cursor-pointer transition-transform ease-out duration-150 hover:scale-150 ' />
              <SearchCircleIcon className='h-5 w-5' />
              <EmojiHappyIcon className='h-5 w-5' />
              <CalendarIcon className='h-5 w-5' />
              <LocationMarkerIcon className='h-5 w-5' />
            </div>
            <button onClick={handleSubmit} disabled={!input || !session} className='disabled:opacity-40 bg-twitter px-5 py-2 font-bold text-white rounded-full' >Tweet</button>
          </div>

          {imageUrlisOpen && (
            <form className='mt-5 bg-twitter/80 flex rounded-lg py-2 px-4' >
              <input ref={imageInputRef} placeholder='Enter image Url...' className=' flex-1 p-2 text-white bg-transparent outline-none placeholder:text-white ' type="text" />
              <button type='submit' onClick={addImageToTweet} className='text-white font-bold' >Add Image</button>
            </form>
          )}
          {
            image && (
              <img src={image} className="rounded-xl object-contain mt-10 h-40 shadow-lg w-full" alt="" />
            )
          }
        </form>
      </div>
    </div>
  )
}

export default TweetBox