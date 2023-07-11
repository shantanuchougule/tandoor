import './App.css';
import A from './Components/A';
import B from './Components/B';
import C from './Components/C';
import D from './Components/D';
import E from './Components/E';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<A />}/>
          <Route path="A" element={<A />} />
          <Route path="B" element={<B />} />
          <Route path="C" element={<C />} />
          <Route path="D" element={<D />} />
          <Route path="E" element={<E/>} />
      </Routes>
    </div>
  );
}

export default App;
