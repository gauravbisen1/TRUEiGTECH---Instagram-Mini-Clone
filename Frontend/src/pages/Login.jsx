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
      const res = await api.post('/auth/login',{ username, password });
      console.log('Login Response:',res.data);
      login(res.data.token, res.data.user);
      navigate('/');
    } catch (error) {
      console.log(error)
    }

    
  }
  return (
    <form onSubmit={submit}>
      <h2>Login</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input placeholder="Password" type='password' onChange={e => setPassword(e.target.value)} />
      <button>Login</button>
    </form>
  )
}

export default Login