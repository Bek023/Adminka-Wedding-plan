import {ConfigProvider} from 'antd'
import './App.css'

function App() {

  return (
    <>
      <ConfigProvider theme={{
        token: {
          colorPrimary: '#FF99A3',
          colorInfo: "och pushti"
        }
      }}>

      </ConfigProvider>
    </>
  )
}

export default App
