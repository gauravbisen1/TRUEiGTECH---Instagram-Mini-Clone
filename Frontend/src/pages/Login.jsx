import React, { useContext, useState } from 'react'
import api from '../api/axios'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', { username, password });
      console.log('Login Response:', res.data);
      login(res.data.token, res.data.user);
      navigate('/');
    } catch (error) {
      console.log(error)
    }


  }
  return (

    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='max-w-md w-full bg-white p-8 rounded-lg shadow-lg'>
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-6'>Login</h2>
        <form onSubmit={submit}>
          <div>
            <input
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className='w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-blue-400 focus:border-transparent' required />
          </div>
          <div>
            <input
              placeholder="Password"
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              className='w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-blue-400 focus:border-transparent' required />
            <button type='submit' className='w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-200'>Login</button>
          </div>
        </form>
        <p className='mt-6 text-center text-gray-500'>
          Don't have an account? 
          <a href="/signup" className='text-blue-500 hover:underline'>Sign Up</a>
        </p>

      </div>
    </div>

  )
}

export default Login