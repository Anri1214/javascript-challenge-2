export const dragonCurve = n => {
  const result = [];

  while (n > 0) {
    const mirror = result.map(item => item ^= 1).reverse();

    result.push(1, ...mirror);
    n--;
  }

  return result.join('');
};
