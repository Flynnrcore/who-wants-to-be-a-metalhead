import { useState, useRef, useEffect } from 'react';
import './Quiz.css';
import { data } from '../assets/data';

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[0]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const optionsRefs = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    setQuestion(data[index]);
  }, [index]);

  const checkAnswer = (e: React.MouseEvent<HTMLLIElement>, ans: number) => {
    if (!lock) {
      const isCorrect = question.answer === ans;
      e.currentTarget.classList.add(isCorrect ? 'correct' : 'wrong');
      setLock(true);

      if(isCorrect) {
        setScore(prev => prev + 1);
      } else {
        const correctOption = optionsRefs.current[question.answer - 1];
        if (correctOption) {
          correctOption.classList.add('correct');
        }
      }
    }
  }

  const nextQuestion = () => {
    if (lock) {
     if (index === data.length - 1) {
        setResult(true);
     } else {
        setIndex(prev => prev + 1);
        setLock(false);
        optionsRefs.current.forEach(option => {
         if (option) {
            option.classList.remove('wrong', 'correct');
         }
        });
     }
    }
  };

  const reset = () => {
    setIndex(0);
    setScore(0);
    setLock(false);
    setResult(false);
    optionsRefs.current.forEach(option => {
     if (option) {
        option.classList.remove('wrong', 'correct');
     }
    });
  };

  return (
    <div className='container'>
      {result? <>
        <h2>You Scored {score} out of {data.length}</h2>
        <button onClick={reset}>Reset</button>
      </>: <>
      <div className='index'>Question {index + 1} of {data.length}</div>
         <h2 className='questiion-text'>{question.question}</h2>
         <ul>
            {question.options.map((option, i) => (
             <li
             key={i}
             ref={el => optionsRefs.current[i] = el as HTMLLIElement}
             onClick={(e) => checkAnswer(e, i + 1)}
          >
                {option}
             </li>
            ))}
         </ul>
         <button onClick={nextQuestion} className="next-button">Next</button>
         <img className="game-left-anim" src="/metalhead.png" alt="Metalhead" />
         <img className="game-right-anim" src="/interviewer.png" alt="Interviewer" />
      </>}
    </div>

  );
}

export default Quiz;