import './css/App.css'

import Welcome from './pages/Welcome.tsx'
import UserInfo from './pages/UserInfo.tsx'
import MainPage from './pages/MainView.tsx'

import { EasyMode, MediumMode, HardMode, ExtremeMode } from './pages/Game.tsx'

import { ViewController, View } from './ViewController/ViewControllerPackage.tsx'


function App() {

  return (
    <>
      <ViewController>
        <View id="home" component={Welcome} />
        <View id="user-info" component={UserInfo} />
        <View id="menu" component={MainPage} />
        <View id="easyMode" component={EasyMode} />
        <View id="mediumMode" component={MediumMode} />
        <View id="hardMode" component={HardMode} />
        <View id="extremeMode" component={ExtremeMode} />
      </ViewController>
    </>
  )
}

export default App
