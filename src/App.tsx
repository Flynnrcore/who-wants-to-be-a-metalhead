
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import Quiz from './components/Quiz';

function App() {

  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<MainPage />} />
          <Route path="/game" element={<Quiz />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
