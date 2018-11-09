export const rotateMatrix = arr => {
  const indexes = [...arr.keys()];

  return indexes.map(index => {
    return arr.map(row => row[index]);
  });
};
