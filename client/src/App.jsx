import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import axios from 'axios'
import { UserContextProvider } from './Usercontext'
import { useEffect } from 'react'
import Header from './Header'
import Account from './pages/Account'
import MyPlaces from './pages/MyPlaces'
import IndexPage from './pages/IndexPage'

axios.defaults.baseURL = "http://localhost:3200"
axios.defaults.withCredentials = true;


function App() {
  useEffect(()=>{
    axios.get('/profile')
  })


  return (
    <>
        <UserContextProvider>
          <Header/>
          <Routes>
            {/* <Route index element={<Header/>}/> */}
            <Route path='/' element={<IndexPage/>}/>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/account' element={<Account/>}/>
            <Route path='/account/:subpage?' element={<Account/>}/>
            <Route path='/account/:subpage/:action' element={<Account/>}/>
            <Route path='/places' element={<Account/>}/>
            <Route path='/myplaces' element={<MyPlaces/>}/>


          </Routes>
        </UserContextProvider>
    </>
  ) 
}

export default App
