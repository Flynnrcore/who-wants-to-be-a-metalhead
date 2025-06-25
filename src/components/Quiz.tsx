import { useState, useRef } from 'react';
import './Quiz.css';
import Result from './Result';
import { data } from '../assets/data';
import getRandomNumsArray from '../utils/getRandomNumsArray';

const QUESTIONS_COUNT = 10;
const MAX_INDEX = 60;

const Quiz = () => {
  const [randomNums, setRandomNums] = useState(() => getRandomNumsArray(QUESTIONS_COUNT, MAX_INDEX));
  const [index, setIndex] = useState(0);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const optionsRefs = useRef<HTMLLIElement[]>([]);

  const question = data[randomNums[index]];

  const clearOptionClasses = () => {
    optionsRefs.current.forEach(option => {
      if (option) option.classList.remove('wrong', 'correct');
    });
  };

  const checkAnswer = (e: React.MouseEvent<HTMLLIElement>, ans: number) => {
    if (!lock) {
      const isCorrect = question.answer === ans;
      e.currentTarget.classList.add(isCorrect ? 'correct' : 'wrong');
      setLock(true);

      if (isCorrect) {
        setScore(prev => prev + 1);
      } else {
        const correctOption = optionsRefs.current[question.answer - 1];
        if (correctOption) correctOption.classList.add('correct');
      }
    }
  };

  const nextQuestion = () => {
    if (lock) {
      if (index === randomNums.length - 1) {
        setResult(true);
      } else {
        setIndex(prev => prev + 1);
        setLock(false);
        clearOptionClasses();
      }
    }
  };

  const reset = () => {
    setRandomNums(getRandomNumsArray(QUESTIONS_COUNT, MAX_INDEX));
    setIndex(0);
    setScore(0);
    setLock(false);
    setResult(false);
    clearOptionClasses();
  };

  return (
    <div className='game-container'>
      {result ? (
        <div className='results'>
          <h2>Результат: {score} из {randomNums.length}</h2>
          <Result results={score} maxQuestions={randomNums.length} />
          <button onClick={reset} className='next-button' type="button">начать заново</button>
        </div>
      ) : (
        <>
          <div className='index'>Вопрос {index + 1} из {randomNums.length}</div>
          <h2 className='question-text'>{question.question}</h2>
          <ul>
            {question.options.map((option, i) => (
              <li
                key={i}
                ref={el => optionsRefs.current[i] = el as HTMLLIElement}
                onClick={e => checkAnswer(e, i + 1)}
              >
                {option}
              </li>
            ))}
          </ul>
          <button
            onClick={nextQuestion}
            className="next-button"
            type="button"
            disabled={!lock}
          >
            следующий
          </button>
          <img className="image-left game-left-img" src="./metalhead.webp" alt="Metalhead" />
          <img className="image-right game-right-img" src="./interviewer.webp" alt="Interviewer" />
        </>
      )}
    </div>
  );
};

export default Quiz;