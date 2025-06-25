
export const calcResultPerсent = (correctAnswers: number, totalQuestions: number): number => {
  if (correctAnswers === 0) {
    return 0;
  }
  return totalQuestions / correctAnswers * 100;
}