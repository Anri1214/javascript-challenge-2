import {rotateMatrix} from './index';

describe('rotateMatrix::', () => {
  it('Rotate square matrix', () => {
    const tasks = [
      {
        input: [
          [1, 2],
          [3, 4]
        ],
        output: [
          [1, 3],
          [2, 4]
        ]
      },
      {
        input: [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]
        ],
        output: [
          [1, 4, 7],
          [2, 5, 8],
          [3, 6, 9]
        ]
      },
      {
        input: [
          ['a', 'b', 'c', 'd'],
          ['e', 'f', 'g', 'h'],
          ['i', 'j', 'k', 'l'],
          ['m', 'n', 'o', 'p']
        ],
        output: [
          ['a', 'e', 'i', 'm'],
          ['b', 'f', 'j', 'n'],
          ['c', 'g', 'k', 'o'],
          ['d', 'h', 'l', 'p']
        ]
      }
    ];

    tasks.forEach(task => {
      return expect(rotateMatrix(task.input)).toEqual(task.output);
    });
  });
});
