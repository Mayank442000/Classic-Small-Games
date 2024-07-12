import { Component } from "solid-js";
import { EMPTY, Player, BoardState } from "./types";

const Board: Component<{ board: BoardState }> = (props) => {
    const { board } = props;

    const handleClick = (index: number) => {
        // Handle click logic (update board state, check winner etc.)
    };

    return (
        <div class="board">
            {board.map((cell, index) => (
                <button key={index} onClick={() => handleClick(index)} disabled={cell !== EMPTY}>
                    {cell}
                </button>
            ))}
        </div>
    );
};

export default Board;
