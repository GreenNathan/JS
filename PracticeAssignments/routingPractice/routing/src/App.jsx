import { Routes, Route, Navigate, useParams } from "react-router-dom";
import './App.css';

function App() {

  const Display = (props) => {
    const { display } = useParams();
    return (
      isNaN(display) ? <h2>The word is: {display}</h2> :
        <h2>The number is: {display}</h2>
    );
  };

  const Color = (props) => {
    const { text } = useParams();
    const { tcolor } = useParams();
    const { bcolor } = useParams();
    return (
      <h2 style={{ color: tcolor, backgroundColor: bcolor }}> The word is: {text} </h2>
    );
  };

  return (
    <div>
      <h1>Routing Practice</h1>
      <Routes>
        <Route path="/home" element={<h3> Welcome </h3>} />
        <Route path="/:display" element={<Display />} />
        <Route path="/:text/:tcolor/:bcolor" element={<Color />} />
      </Routes>
    </div>
  );
};

export default App;
