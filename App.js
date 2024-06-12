
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Layout/Navbar';
import Home from './components/Layout/Pages/Home';
import About from './components/Layout/Pages/About';
import Register from './components/Layout/Pages/Register';
import List from './components/Layout/Pages/List';
import Error from './components/Layout/Pages/Error';
import Edit from './components/Layout/Pages/Edit';
import Delete from './components/Layout/Pages/Delete';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>


        <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/list' element={<List/>}></Route>
          

          <Route path='/customer/update/:customerID' element={<Edit/>}></Route>

          <Route path='/customer/delete/:customerID' element={<Delete/>}></Route>


          <Route path='*' element={<Error/>}></Route>


        </Routes>
      

    </div>
  );
}

export default App;
