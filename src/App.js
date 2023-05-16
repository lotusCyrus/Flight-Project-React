import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import './asset/css/style.css'
import Portal from './pages/portal/Portal';
import Footer from './components/nav/Footer';
import Dashboard from './pages/dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
 
     <Routes>
        <Route path='/' element={<Portal/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
