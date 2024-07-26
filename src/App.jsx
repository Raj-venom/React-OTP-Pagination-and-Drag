import './App.css'
import List from './components/drag/List'
import Drag from './page/drag'
import Otp from "./page/otp"
import Table from './page/table'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
      {/* <Otp/> */}
      {/* <Drag/> */}
      {/* <Table/> */}
      <Outlet />

    </>

  )
}

export default App
