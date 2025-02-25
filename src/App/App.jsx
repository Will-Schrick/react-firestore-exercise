//import { useState } from 'react';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../routes/HomePage.jsx';
import SongsPage from '../routes/SongsPage.jsx';
import AddSongPage from '../routes/AddSongPage.jsx';
import '../App.css';

function App() {
  //const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/songs" element={<SongsPage />} />
        <Route path="/add-song" element={<AddSongPage />} />
      </Routes>
    </Router>
  );
}

export default App;

/*
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
*/
