import React, { useEffect, useState } from 'react'
import { Comment, Tweet } from '../typing'
import TimeAgo from 'react-timeago'
import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon
} from '@heroicons/react/outline'
import { fetchComments } from '../utils/fetchComments'

interface Props {
  tweet: Tweet
}

const TweetComponent = ({ tweet }: Props) => {

  const [comments, setComments] = useState<Comment[]>([])

  const refereshComments = async () => {
    const cmts: Comment[] = await fetchComments(tweet._id)
    setComments(cmts);
  }

  useEffect(() => {
    refereshComments();
  }, [])

  console.log(comments);


  return (
    <div className='flex flex-col space-x-3 border-y p-5 border-gray-100' >

      <div className='flex space-x-3' >
        <img className='h-10 w-10 rounded-full object-cover' src={tweet.profileImg} alt="" />
        <div>
          <div className='flex items-center space-x-1' >
            <p className='mr-1 font-bold' > {tweet.username}</p>
            <p className='hidden text-sm text-gray-500 sm:inline' >@{tweet.username.replace(/\s+/g, '').toLowerCase()}</p>

            <TimeAgo date={tweet._createdAt} className='text-sm text-gray-500' />
          </div>

          <p className='pt-2' >{tweet.text}</p>
          {tweet.image && <img className=' shadow-sm object-cover m-5 ml-0 mb-1 max-h-60 rounded-lg' src={tweet.image} alt="" />}
        </div>
      </div>

      <div className='flex mt-5 justify-between'>
        <div className='flex cursor-pointer items-center text-gray-400 space-x-3 ' ><ChatAlt2Icon className='h-5 w-5' />
          <p>{comments.length}</p>
        </div>
        <div className='flex cursor-pointer items-center text-gray-400 space-x-3 ' ><SwitchHorizontalIcon className='h-5 w-5' /></div>
        <div className='flex cursor-pointer items-center text-gray-400 space-x-3 ' ><HeartIcon className='h-5 w-5' /></div>
        <div className='flex cursor-pointer items-center text-gray-400 space-x-3 ' ><UploadIcon className='h-5 w-5' /></div>
      </div>

      {comments?.length > 0 && (
        <div className='my-2 mt-5  space-y-5 max-h-44 overflow-y-scroll border-t border-gray-100 p-5'  >
          {comments.map((comment) => (
            <div key={comment._id} className="relative flex space-x-2" >
              <hr className='absolute left-5 top-10 h-8 border-x border-twitter/30' />
              <img className=' mt-2 h-7 w-7 object-cover rounded-full' src={comment.profileImg} alt="" />
              <div>
                <div className='flex items-center space-x-1' >
                  <p className='mr-1 font-bold' >{comment.username}</p>
                  <p className='hidden text-sm text-gray-500 lg:inline' >@{comment.username.replace(/\s+/g, '').toLowerCase()}</p>
                  <TimeAgo date={comment._createdAt} className='text-sm text-gray-500' />
                </div>
                <p>{comment.comment}</p>
              </div>
            </div>

          ))}
        </div>
      )}

    </div>
  )
}

export default TweetComponent;