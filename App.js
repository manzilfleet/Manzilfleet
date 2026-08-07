import Navbar from './Components/Navbar';
import Footer from './Components/OneFooter';
import About from './Components/OwnerPOV';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Tour from './Pages/Tour';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Tour' element={<Tour/>}/>
      </Routes>
     <Navbar/>
     <Footer/>
    </div>
  );
}

export default App;
