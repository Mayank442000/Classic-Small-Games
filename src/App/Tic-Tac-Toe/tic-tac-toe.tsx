import { style } from "solid-js/web";
import { MainScreen, SubScreen, Screen } from "../../Components/Screens";
import { createSignal, Index } from "solid-js";
import "./tic-tac-toe.css";
import styles from "./tic-tac-toe.css";
import { scoreEachInd, checkMaxScore, checkWin, victoryInds, max_score_info_type } from "./logic";

const TicTacToeGame = () => {
    const [boardState, setBoardState] = createSignal(["", "", "", "", "", "", "", "", ""]); // l = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]; [list(map(lambda x:int(x)-1,e)) for e in l]
    const [boardStateClass, setBoardStateClass] = createSignal(["unmrk", "unmrk", "unmrk", "unmrk", "unmrk", "unmrk", "unmrk", "unmrk", "unmrk"]);
    const [turn, setTurn] = createSignal(true);
    const [playable, setPlayable] = createSignal(true);
    let scores: number[] = new Array(8),
        max_score_info: max_score_info_type = { maxScore: 0, numberOfOccurrence: 0, indices: [] };
    const markCell = (index: number) => {
        if (!boardState()[index] && playable()) {
            let cur_turn = turn();
            let turn_symb: "X" | "O" = cur_turn ? "X" : "O";
            setBoardState([...boardState().slice(0, index), turn() ? "X" : "O", ...boardState().slice(index + 1)]);
            console.log(cur_turn, boardState());
            scores = scoreEachInd(boardState(), turn_symb);
            max_score_info = checkMaxScore(scores);
            console.log(cur_turn, scores);
            if (checkWin(max_score_info)) {
                let cur_board_state = Array.from(boardState());
                let cur_board_state_class = Array.from(boardStateClass());
                console.log("victoryInds", victoryInds[max_score_info.indices[0]]);
                for (let i of victoryInds[max_score_info.indices[0]]) cur_board_state_class[i] = "won";
                cur_board_state_class[index] = "vic";
                console.log(cur_board_state_class);
                for (let i in cur_board_state) if (cur_board_state[i] && cur_board_state[i] !== turn_symb) cur_board_state_class[i] = "lost";
                setPlayable(false);
                setBoardState(cur_board_state);
                setBoardStateClass(cur_board_state_class);
            } else setBoardStateClass([...boardStateClass().slice(0, index), "mrkd", ...boardStateClass().slice(index + 1)]);
            setTurn(!cur_turn);
        }
    };

    return (
        <MainScreen>
            <h1>Tic-Tac-Toe</h1>
            <SubScreen id="sub">
                <Screen id="board-screen">
                    <div id="board">
                        <Index each={boardState()}>
                            {(item, index) => (
                                <div onClick={() => markCell(index)} id={`board-cell-${index}`} class={`board-cell ${boardStateClass()[index]}`}>
                                    {boardState()[index]}
                                </div>
                            )}
                        </Index>
                    </div>
                </Screen>
                <Screen id="info-screen">
                    <SubScreen id="game-info" class="info-subs">
                        Info
                    </SubScreen>
                    <SubScreen id="game-desc" class="info-subs">
                        Info
                    </SubScreen>
                </Screen>
            </SubScreen>
        </MainScreen>
    );
};

export default TicTacToeGame;
