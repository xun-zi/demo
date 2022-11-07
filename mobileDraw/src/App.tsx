import { useState } from 'react'
import reactLogo from './assets/react.svg'
import '@/App.scss'
import WxSingleChat from './Page/WxSingleChat/WxSingleChat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div style={{fontSize:'24px'}}><WxSingleChat/></div>
    </div>
  )
}

export default App
