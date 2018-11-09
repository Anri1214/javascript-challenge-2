import {dragonCurve} from './index';

describe('dragonCurve::', () => {
  it('Find dragon curve', () => {
    const tasks = [
      {
        input: 1,
        output: '1'
      },
      {
        input: 2,
        output: '110'
      },
      {
        input: 3,
        output: '1101100'
      },
      {
        input: 4,
        output: '110110011100100'
      },
      {
        input: 5,
        output: '1101100111001001110110001100100'
      }
    ];

    tasks.forEach(task => {
      return expect(dragonCurve(task.input)).toEqual(task.output);
    });
  });
});
