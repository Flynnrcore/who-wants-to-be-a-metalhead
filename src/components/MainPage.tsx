import './MainPage.css';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  
  const handleStartClick = () => {
      navigate('/game');
  };
  
  return (
      <div className="start-container">
       <div className="app-name">
          <img className="logo" src="./src/assets/circle.png" alt="App Logo" />
          <h1>
           WHO WANTS
  TO BE
  A METALHEAD
          </h1>
       </div>
       <div className="game-controls">
          <img className="image-left main-left-anim" src="./metalhead.png" alt="Metalhead" />
          <img className="image-right main-right-anim" src="./interviewer.png" alt="Interviewer" />
          <button onClick={handleStartClick} className="start-button">START</button>
       </div>
      </div>
  );
};

export default MainPage;