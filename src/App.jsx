import {ConfigProvider} from 'antd'
import './App.css'
import Login from './components/Login'

function App() {

  return (
    <>
      <ConfigProvider theme={{
        token: {
          colorPrimary: '#ffffff',
          colorInfo: "och pushti"
        }
      }}>
        <Login/>
      </ConfigProvider>
    </>
  )
}

export default App
