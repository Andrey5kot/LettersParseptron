export class Letters {

  public static get LETTERS(): Array<number[][]> {
    const letters = new Array<number[][]>();
    letters.push([[0, 0, 1, 0, 0],
                  [0, 1, 0, 1, 0],
                  [0, 1, 0, 1, 0],
                  [1, 1, 1, 1, 1],
                  [1, 0, 0, 0, 1],
                  [1, 0, 0, 0, 1],
                  [1, 0, 0, 0, 1]]);

    letters.push([[1, 1, 1, 1, 1],
                  [1, 0, 0, 0, 0],
                  [1, 0, 0, 0, 0],
                  [1, 1, 1, 1, 1],
                  [1, 0, 0, 0, 1],
                  [1, 0, 0, 0, 1],
                  [1, 1, 1, 1, 1]]);

    letters.push([[1, 1, 1, 1, 1],
                  [1, 0, 0, 0, 1],
                  [1, 0, 0, 1, 1],
                  [1, 1, 1, 0, 0],
                  [1, 0, 0, 1, 1],
                  [1, 0, 0, 0, 1],
                  [1, 1, 1, 1, 1]]);

    letters.push([[1, 1, 1, 1, 1],
                  [1, 0, 0, 0, 0],
                  [1, 0, 0, 0, 0],
                  [1, 0, 0, 0, 0],
                  [1, 0, 0, 0, 0],
                  [1, 0, 0, 0, 0],
                  [1, 0, 0, 0, 0]]);

    letters.push([[0, 0, 0, 0, 1],
                  [1, 1, 1, 1, 1],
                  [1, 0, 0, 0, 0],
                  [1, 0, 0, 0, 0],
                  [1, 0, 0, 0, 0],
                  [1, 0, 0, 0, 0],
                  [1, 0, 0, 0, 0]]);

    letters.push([[0, 0, 0, 0, 0],
                  [0, 1, 1, 1, 0],
                  [0, 1, 0, 1, 0],
                  [0, 1, 0, 1, 0],
                  [0, 1, 0, 1, 0],
                  [1, 1, 1, 1, 1],
                  [1, 0, 0, 0, 1]]);

    letters.push([[1, 1, 1, 1, 1],
                  [1, 0, 0, 0, 0],
                  [1, 0, 0, 0, 0],
                  [1, 1, 1, 1, 1],
                  [1, 0, 0, 0, 0],
                  [1, 0, 0, 0, 0],
                  [1, 1, 1, 1, 1]]);

    letters.push([[0, 1, 1, 1, 0],
                  [1, 0, 0, 0, 1],
                  [1, 0, 0, 0, 0],
                  [1, 1, 1, 1, 1],
                  [1, 0, 0, 0, 0],
                  [1, 0, 0, 0, 1],
                  [0, 1, 1, 1, 0]]);

    letters.push([[0, 0, 0, 0, 0],
                  [1, 0, 1, 0, 1],
                  [1, 0, 1, 0, 1],
                  [0, 1, 1, 1, 0],
                  [1, 0, 1, 0, 1],
                  [1, 0, 1, 0, 1],
                  [0, 0, 0, 0, 0]]);

    letters.push([[1, 1, 1, 1, 0],
                  [0, 0, 0, 0, 1],
                  [0, 0, 0, 0, 1],
                  [1, 1, 1, 1, 0],
                  [0, 0, 0, 0, 1],
                  [0, 0, 0, 0, 1],
                  [1, 1, 1, 1, 0]]);

    letters.push([[1, 0, 0, 0, 1],
                  [1, 0, 0, 0, 1],
                  [1, 0, 0, 1, 1],
                  [1, 0, 1, 0, 1],
                  [1, 1, 0, 0, 1],
                  [1, 0, 0, 0, 1],
                  [1, 0, 0, 0, 1]]);

    letters.push([[0, 0, 1, 0, 0],
                  [0, 0, 0, 0, 0],
                  [0, 0, 1, 0, 0],
                  [0, 0, 1, 0, 0],
                  [0, 0, 1, 0, 0],
                  [0, 0, 1, 0, 0],
                  [0, 0, 1, 0, 0]]);

    letters.push([[0, 1, 0, 1, 0],
                  [0, 0, 0, 0, 0],
                  [0, 0, 1, 0, 0],
                  [0, 0, 1, 0, 0],
                  [0, 0, 1, 0, 0],
                  [0, 0, 1, 0, 0],
                  [0, 0, 1, 0, 0]]);

    letters.push([[0, 1, 1, 1, 0],
                  [0, 0, 0, 0, 0],
                  [1, 0, 0, 0, 1],
                  [1, 0, 0, 1, 1],
                  [1, 0, 1, 0, 1],
                  [1, 1, 0, 0, 1],
                  [1, 0, 0, 0, 1]]);

    letters.push([[1, 0, 0, 0, 1],
                  [1, 0, 0, 1, 0],
                  [1, 0, 1, 0, 0],
                  [1, 1, 0, 0, 0],
                  [1, 0, 1, 0, 0],
                  [1, 0, 0, 1, 0],
                  [1, 0, 0, 0, 1]]);

    letters.push([[0, 0, 1, 0, 0],
                  [0, 1, 0, 1, 0],
                  [0, 1, 0, 1, 0],
                  [1, 1, 0, 1, 1],
                  [1, 0, 0, 0, 1],
                  [1, 0, 0, 0, 1],
                  [1, 0, 0, 0, 1]]);

    letters.push([[0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0],
                  [0, 1, 0, 1, 0],
                  [1, 0, 1, 0, 1],
                  [1, 0, 1, 0, 1]]);

    letters.push([[1, 0, 0, 0, 1],
                  [1, 0, 0, 0, 1],
                  [1, 0, 0, 0, 1],
                  [1, 1, 1, 1, 1],
                  [1, 0, 0, 0, 1],
                  [1, 0, 0, 0, 1],
                  [1, 0, 0, 0, 1]]);

    letters.push([[0, 0, 1, 0, 0],
                      [0, 1, 0, 1, 0],
                      [1, 0, 0, 0, 1],
                      [1, 0, 0, 0, 1],
                      [1, 0, 0, 0, 1],
                      [0, 1, 0, 1, 0],
                      [0, 0, 1, 0, 0]]);

    letters.push([[1, 1, 1, 1, 1],
                      [1, 0, 0, 0, 1],
                      [1, 0, 0, 0, 1],
                      [1, 0, 0, 0, 1],
                      [1, 0, 0, 0, 1],
                      [1, 0, 0, 0, 1],
                      [1, 0, 0, 0, 1]]);

    letters.push([[1, 1, 1, 1, 0],
                      [1, 0, 0, 0, 1],
                      [1, 0, 0, 0, 1],
                      [1, 1, 1, 1, 0],
                      [1, 0, 0, 0, 0],
                      [1, 0, 0, 0, 0],
                      [1, 0, 0, 0, 0]]);

    letters.push([[0, 0, 1, 1, 0],
                      [0, 1, 0, 0, 1],
                      [1, 0, 0, 0, 0],
                      [1, 0, 0, 0, 0],
                      [1, 0, 0, 0, 0],
                      [0, 1, 0, 0, 1],
                      [0, 0, 1, 1, 0]]);

    letters.push([[1, 1, 1, 1, 1],
                      [0, 0, 1, 0, 0],
                      [0, 0, 1, 0, 0],
                      [0, 0, 1, 0, 0],
                      [0, 0, 1, 0, 0],
                      [0, 0, 1, 0, 0],
                      [0, 0, 1, 0, 0]]);

    letters.push([[1, 0, 0, 0, 1],
                      [0, 1, 0, 0, 1],
                      [0, 0, 1, 0, 1],
                      [0, 0, 0, 1, 1],
                      [0, 0, 0, 0, 1],
                      [0, 0, 0, 0, 1],
                      [0, 0, 0, 0, 1]]);

    letters.push([[0, 0, 1, 0, 0],
                      [1, 1, 1, 1, 1],
                      [1, 0, 1, 0, 1],
                      [1, 1, 1, 1, 1],
                      [0, 0, 1, 0, 0],
                      [0, 0, 1, 0, 0],
                      [0, 0, 1, 0, 0]]);

    letters.push([[0, 0, 0, 0, 0],
                      [1, 0, 0, 0, 1],
                      [0, 1, 0, 1, 0],
                      [0, 0, 1, 0, 0],
                      [0, 1, 0, 1, 0],
                      [1, 0, 0, 0, 1],
                      [0, 0, 0, 0, 0]]);

    letters.push([[1, 0, 0, 1, 0],
                      [1, 0, 0, 1, 0],
                      [1, 0, 0, 1, 0],
                      [1, 0, 0, 1, 0],
                      [1, 0, 0, 1, 0],
                      [1, 1, 1, 1, 0],
                      [0, 0, 0, 1, 1]]);

    letters.push([[1, 0, 0, 0, 1],
                      [1, 0, 0, 0, 1],
                      [1, 0, 0, 0, 1],
                      [0, 1, 1, 1, 1],
                      [0, 0, 0, 0, 1],
                      [0, 0, 0, 0, 1],
                      [0, 0, 0, 0, 1]]);

    letters.push([[0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0],
                      [1, 0, 1, 0, 1],
                      [1, 0, 1, 0, 1],
                      [1, 0, 1, 0, 1],
                      [1, 0, 1, 0, 1],
                      [1, 1, 1, 1, 1]]);

    letters.push([[0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0],
                      [1, 0, 1, 0, 1],
                      [1, 0, 1, 0, 1],
                      [1, 0, 1, 0, 1],
                      [1, 1, 1, 1, 1],
                      [0, 0, 0, 0, 1]]);

    letters.push([[1, 0, 0, 0, 0],
                      [1, 0, 0, 0, 0],
                      [1, 0, 0, 0, 0],
                      [1, 1, 1, 1, 0],
                      [1, 0, 0, 0, 1],
                      [1, 0, 0, 0, 1],
                      [1, 1, 1, 1, 1]]);

    letters.push([[0, 0, 0, 0, 0],
                [1, 0, 1, 1, 0],
                [1, 1, 0, 0, 1],
                [1, 1, 0, 0, 1],
                [1, 1, 0, 0, 1],
                [1, 0, 1, 1, 0],
                [0, 0, 0, 0, 0]]);

    letters.push([[0, 1, 1, 1, 1],
                  [0, 1, 0, 0, 1],
                  [0, 1, 0, 0, 1],
                  [0, 1, 1, 1, 1],
                  [0, 0, 1, 0, 1],
                  [0, 1, 0, 0, 1],
                  [1, 0, 0, 0, 1]]);
    return letters;
  }

}
