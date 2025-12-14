import {useState} from 'react'
import api from '../api/axios';
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const [imageUrl,setImageUrl] = useState('');
  const [caption, setCaption] = useState('');
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    await api.post('/posts', {imageUrl , caption});
    navigate('/');
  }

  return (
    <form onSubmit={submit}>
      <h2>Create Post</h2>
      <input placeholder="ImageUrl" onChange={e => setImageUrl(e.target.value)} />
      <input placeholder="Caption" onChange={e => setCaption(e.target.value)} />
      <button>Create</button>
    </form>
  )
}

export default CreatePost