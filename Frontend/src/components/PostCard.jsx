import React from 'react'
import api from '../api/axios'



const PostCard = ({post}) => {
   const likePost = async()=>{
       await api.post(`/posts/${posts._id}/like`);
   };

  return (
    <div className='bg-white border rounded-lg shadow-sm'>
      <div className='flex items-center px-4 py-3'>
        <div className='w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold'>
        {post.user.username}
        </div>
        <span className='ml-3 font-semibold text-sm'>
        {post.user.username}
        </span>
      </div>
      {post.imageUrl && (
        <img
        src={post.imageUrl}
        alt='post'
        className='w-full object-cover max-h-[500px]'/>
      )}
      <div className='px-4 py-2 flex items-center space -x-4'>
      <button onClick={likePost}> &hearts;{post.likes.length}</button>
      
      <div className='px-4 py-1 text-sm'>
        <span className='font-semibold mr-1'>
          {post.user?.username}
        </span>
        {post.caption}
      </div>

      <div className='px-4 py-1 space-y-1'>
        {post.comments?.slice(0,2).map((c,i)=>(
          <p key={i} className='font-semibold mr-1'>
          <span className='font-semibold mr-1'>{c.user?.username}</span>
          {c.text}
          </p>
        ))}
      </ div>

      <div className='border-t px-4 py-2'>
        <input type="text"
        placeholder='add a comment...'
        className='w-full text-sm outline-none' />
      </div>

      </div>
        
    </div>
  )
}

export default PostCard