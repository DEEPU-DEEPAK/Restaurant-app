import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import Resdetails from './components/Resdetails';

function App() {
  return (
    <Router>
      <Header/>

      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/resturant-details/:id' element={<Resdetails/>}></Route>
      </Routes>

     <Footer/>
    </Router>
  );
}

export default App;
