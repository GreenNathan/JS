import { Routes, Route } from "react-router-dom";
import './App.css';
import Form from './components/Form';
import People from './components/People';
import Planet from './components/Planet';

//add more comments

function App() {
  return (
    <div>
      <Form />
      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planet />} />
        <Route path="*" element={<h1>Nothing Found😭</h1>} />
      </Routes>

    </div>
  );
}

export default App;
