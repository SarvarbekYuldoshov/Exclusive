import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Hover from './Components/Hover/Hover'
import Navbar from './Components/Navbar/Navbar'
import './index.css'
import "./App.css"
import Main from './Components/Main/Main'
import Menu from './Components/Menu/Menu'
import Number from './Components/Number/Number'
import Footer from './Components/Footer/Footer'
function App() {

  return (
    <>
     <div className='App'> 
        <Header/>
        <Hero/>
        <Hover/>
        <Navbar/>
        <Main/>
        <Menu/>
        <Number/>
        <Footer/>
     </div>
    </>
  )
}

export default App
