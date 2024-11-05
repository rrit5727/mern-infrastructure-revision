import './App.css';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import NewOrderPage from './NewOrderPage/NewOrderPage';
import AuthPage from './AuthPage/Authpage';
import OrderHistoryPage from './OrderHistoryPage/OrderHIstoryPage';
import NavBar from '../../Components/NavBar/NavBar';

function App() {

  const [user, setUser] = useState({})
  
  return (
    <>
      <main className='App'>
        { user ?
          <>
            <NavBar />
            <Routes>
              <Route path="/orders/new" element={<NewOrderPage />}/>
              <Route path="/orders" element={<OrderHistoryPage />}/>
            </Routes>
          </> 
          :
          <AuthPage />
        }
        

      </main>
    </>
  )
}

export default App
