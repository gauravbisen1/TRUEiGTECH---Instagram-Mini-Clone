import {useContext} from 'react'
import { BrowserRouter , Route , Routes , Navigate }from 'react-router-dom'
import { AuthProvider , AuthContext } from './context/AuthContext'

import Login from './pages/Login'
import SignUp from './pages/Signup'
import Feed from './pages/Feed'
import CreatePost from './pages/CreatePost'
import Profile from './pages/Profile'

const PrivateRoute = ({children}) => {
  const {user} = useContext(AuthContext);
  return user ? children : <Navigate to='/login'/>
}


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/' element={<PrivateRoute><Feed/></PrivateRoute>}/>
          <Route path='/create' element={<PrivateRoute><CreatePost/></PrivateRoute>}/>
          <Route path='/login' element={<PrivateRoute><Profile/></PrivateRoute>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App