
import { ConfigProvider } from 'antd'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './components/Login'
import Private_routes from './components/Private_routes';
import Home from './Page/Home';

function App() {
  return (
    <>
      <ConfigProvider theme={{
        token: {
          colorPrimary: '#ffffff',
          colorInfo: "och pushti"
        }
      }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<Login />} path="/login" />
          <Route path='/admin' element={
            <Private_routes >
              <h1>ADMIN</h1>
            </Private_routes>}>
          </Route>
          <Route path='/user' element={
            <Private_routes >
              <h1>USER</h1>
            </Private_routes>}>
          </Route>

        </Routes>
      </ConfigProvider>
    </>
  )
}

export default App
