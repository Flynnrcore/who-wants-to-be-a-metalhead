import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import Quiz from './components/Quiz';

function App() {

  return (
    <div className="main">
      <HashRouter>
        <Routes>
          <Route path="*" element={<MainPage />} />
          <Route path="/game" element={<Quiz />} />
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
