import { Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import FindAll from './components/findAll';
import Findone from './components/findOne';
// import Delete from './components/Delete';
// import Update from '/components/Update';


function App() {

  return (
    <div>
      <Create />
      <Routes>
        <Route path='/' element={<Navigate to="/products" />} />
        <Route path='/products' element={<FindAll />} />
        <Route path='/products/:id' element={<Findone />} />
      </Routes>
    </div>
  );
}

export default App;