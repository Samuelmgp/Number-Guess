import './css/App.css'

import Welcome from './pages/Welcome.tsx'
import Login from './pages/Login.tsx'
import Signup from './pages/Signup.tsx'
import MainPage from './pages/MainView.tsx'
import Congratulations from './pages/Congratulations.tsx'

import { EasyMode, MediumMode, HardMode, ExtremeMode } from './pages/Game.tsx'

import { ViewController, View } from './ViewController/ViewControllerPackage.tsx'


function App() {

  return (
    <>
      <ViewController>
        <View id="home" component={Welcome} />
        <View id="login" component={Login} />
        <View id="signup" component={Signup} />
        <View id="menu" component={MainPage} />
        <View id="easyMode" component={EasyMode} />
        <View id="mediumMode" component={MediumMode} />
        <View id="hardMode" component={HardMode} />
        <View id="extremeMode" component={ExtremeMode} />
        <View id="win" component={Congratulations} />
      </ViewController>
    </>
  )
}

export default App
