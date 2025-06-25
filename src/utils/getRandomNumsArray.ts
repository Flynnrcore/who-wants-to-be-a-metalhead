const getRandomNumsArray = (length: number, max: number): number[] => {
  if (length > max) {
    throw new Error('Размер массива не может быть больше максимального значения');
  }

  const result = new Set<number>();
  while (result.size < length) {
    result.add(Math.floor(Math.random() * (max + 1)));
  }
  return Array.from(result);
};

export default getRandomNumsArray;