import './css/App.css'

import Welcome from './pages/Welcome.tsx'
import { ViewController, View } from './ViewController/ViewControllerPackage.tsx'


function App() {

  return (
    <>
      <ViewController>
        <View id="home" component={Welcome}/>
      </ViewController>
    </>
  )
}

export default App
