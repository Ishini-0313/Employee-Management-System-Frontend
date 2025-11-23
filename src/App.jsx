import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import ListEmployee from './components/ListEmployee'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return(
    <div>
      <BrowserRouter>
        <Header/>
          <Routes>
            {/* http://localhost:5173 */}
            <Route path='/' element={<ListEmployee/>}></Route>

            {/* http://localhost:5173/employees */}
            <Route path='/employees' element={<ListEmployee/>}></Route>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
  
}

export default App
