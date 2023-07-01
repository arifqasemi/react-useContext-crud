import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import CheckContext from './store/store';
import {GlobalProvider} from './store/provider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Update from './component/Update';
import Create from './component/Create';




function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
      </Routes>
      
    </BrowserRouter>
    </GlobalProvider>
   
  );
}

export default App;
