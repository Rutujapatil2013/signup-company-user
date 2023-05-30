import React from 'react'
// import Company from './Components/Company'
import Login from './Components/login'
// import Download from './Components/Download'
import "./App.css"
// import ReadExcel from './Components/ReadExcel';
// import {BrowserRouter,Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import ButtonComponent from './Components/ButtonComponent';
import UpdateCompany from './Components/UpdateCompany';
import UserButtons from './Components/UserButtons';
import AddUser from './Components/AddUser';
import UpdateUser from './Components/UpdateUser';


const App = () => {
  return (
    <>
      {/* <div className="excel">
      <Company />
      <Download />
      </div>
      <Login />
      <BrowserRouter>
      <Routes>
      <Route path='/' element={
      <>

      <div className="App">
      <Login />
      <ReadExcel />
      </div>

      </>} />
      <Route path='/ReadExcel' element={<ReadExcel />} />
      </Routes>
      </BrowserRouter> */}

      <Signup />
      <Login />
      <ButtonComponent/>
      <UpdateCompany/>
      <UserButtons/>
      <AddUser/>
      <UpdateUser/>
    </>
  )
}

export default App;