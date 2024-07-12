const victoryInds = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const scoreEachInd = (board_state: Array<string>, turn: "X" | "O") => {
    let scores = new Array<number>(8);
    for (const [i, inds] of victoryInds.entries()) scores[i] = Number(board_state[inds[0]] === turn) + Number(board_state[inds[1]] === turn) + Number(board_state[inds[2]] === turn);
    return scores;
};

const checkMaxScore = (scores: number[]): max_score_info_type => {
    const maxScore = Math.max(...scores);
    const numberOfOccurrence = scores.filter((score) => score === maxScore).length;
    const indices = scores.reduce((acc, score, index) => {
        if (score === maxScore) {
            acc.push(index);
        }
        return acc;
    }, [] as number[]);
    return { maxScore: maxScore, numberOfOccurrence: numberOfOccurrence, indices: indices };
};

const checkWin = (check_max_score: max_score_info_type) => check_max_score.maxScore === 3;

type max_score_info_type = { maxScore: number; numberOfOccurrence: number; indices: number[] };

export { scoreEachInd, checkMaxScore, checkWin, victoryInds, type max_score_info_type };
