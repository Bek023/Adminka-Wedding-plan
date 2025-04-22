import { useEffect, useState } from 'react';
import { ConfigProvider } from 'antd'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './components/Login'
import Private_routes from './components/Private_routes';
import Home from './Page/Home';

function App() {
  const user = localStorage.getItem("token");
  // const [user, setUser] = useState(null);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <>
      <ConfigProvider theme={{
        token: {
          colorPrimary: '#ffffff',
          colorInfo: "och pushti"
        }
      }}>
        <Routes>
          <Route path='/admin' element={
            <Private_routes >
              <Home />
            </Private_routes>}>
          </Route>
          <Route element={<Login />} path="/admin/login" />
        </Routes>
      </ConfigProvider>
    </>
  )
}

export default App
