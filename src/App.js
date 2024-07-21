import React from "react"
import Routes from "./routes/PageRoutes";
import axios from 'axios'
import {Toaster} from 'react-hot-toast'

import UserContextProvider from './context/userContextProvider'

import './App.css';

import Navbar from "./component/Navbar";

// axios.defaults.baseURL = "http://localhost:8000"
// //http://localhost:8000
axios.defaults.withCredentials = true

function App() {
  return (
    <UserContextProvider>
    <div className="App">
      <Navbar/>
      <Toaster position="bottom-right" toastOptions={{duration:2000}} />
      <Routes/>
    </div>
    </UserContextProvider>
  );
}

export default App;
