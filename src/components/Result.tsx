import { calcResultPerсent } from "../utils/calcResulPersent";

interface ResultProps {
  results: number;
  maxQuestions: number;
}

interface ResultImageData {
  img: string;
  text: string;
}

const resultStatus = {
  bad: 'начинающий рокер',
  neutral: 'Метталист базовый',
  good: 'RockStar'
};

const resultImgMap = {
  bad: './bad_result.webp',
  neutral: './neutral_result.webp',
  good: './god_result.webp',
};

const getResultImage = (resultScore: number): ResultImageData => {
  if (resultScore <= 40) {
    return { img: resultImgMap.bad, text: resultStatus.bad };
  } else if (resultScore <= 80) {
    return { img: resultImgMap.neutral, text: resultStatus.neutral };
  } else {
    return { img: resultImgMap.good, text: resultStatus.good };
  }
};

const Result = ({ results, maxQuestions }: ResultProps) => {
  const resultScore = calcResultPerсent(maxQuestions, results);
  const { img, text } = getResultImage(resultScore);

  return (
    <div style={{ textAlign: 'center'}}>
      <h3 className="result-status">Вы {text}!</h3>
      <img style={{ width: '300px' }} src={img} alt='metalhead emotion' />
    </div>
  );
};

export default Result;