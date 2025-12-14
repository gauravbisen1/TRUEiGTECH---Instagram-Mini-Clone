import { useEffect, useState } from 'react'
import api from '../api/axios'
import PostCard from '../components/PostCard'


const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    api.get('/posts').then(res => setPosts(res.data));
  }, []);
  return (
    <div className='min-h-screen bg-gray-50 flex justify-center'>
      <div className='w-full max-w-md px-2 py-4'>
        <h2 className='textxl font-semibold text-center mb-4'>Feed</h2>
        <div className='space -y-6'>
          {
            posts.map(post => (
              <PostCard key={post._id} post={post} />
            ))
          }
        </div>

      </div>

    </div>
  )
}

export default Feed