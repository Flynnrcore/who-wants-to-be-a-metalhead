
const resultImgMap = {
  bad: './bad_result.webp',
  neutral: './neutral_result.webp',
  good: './god_result.webp',
};

const calcResultPerсent = (correctAnswers: number, totalQuestions: number): number => {
  if (correctAnswers === 0) {
    return 0;
  }
  return totalQuestions / correctAnswers * 100;
}

const getResultImage = (resultScore: number): string => {
  if (resultScore <= 40) {
    return resultImgMap.bad;
  } else if (resultScore <= 80) {
    return resultImgMap.neutral;
  } else {
    return resultImgMap.good;
  }
}

interface ResultProps {
  results: number;
  maxQuestions: number;
}

const Result = ({ results, maxQuestions }: ResultProps) => {
  const resultScore = calcResultPerсent(maxQuestions, results);
  const resultImg = getResultImage(resultScore);

  return (
    <img style={{width: '300px'}} src={resultImg} alt='metalhead emotion'></img>
  )
};

export default Result;