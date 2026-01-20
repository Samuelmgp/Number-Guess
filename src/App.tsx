import './css/App.css'

import Welcome from './pages/Welcome.tsx'
import UserInfo from './pages/UserInfo.tsx'

import { ViewController, View } from './ViewController/ViewControllerPackage.tsx'


function App() {

  return (
    <>
      <ViewController>
        <View id="home" component={Welcome} />
        <View id="user-info" component={UserInfo} />
      </ViewController>
    </>
  )
}

export default App
