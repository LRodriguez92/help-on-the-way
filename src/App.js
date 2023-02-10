import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
