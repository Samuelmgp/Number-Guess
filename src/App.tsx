import './css/App.css'

import GameDisplay from './pages/GameDisplay.tsx'
import { ViewController, View } from './ViewController/VCExport'


function App() {

  return (
    <>
      <ViewController>
        <View id="home" component={GameDisplay}/>
      </ViewController>
    </>
  )
}

export default App
