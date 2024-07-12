import { createSignal, ErrorBoundary, For, JSX, Match, Switch, type Component } from "solid-js";
import Home from "./App/Home";
import TicTacToeGame from "./App/Tic-Tac-Toe/tic-tac-toe";

const AppError = (error: Error, reset: () => void) => {
    const errorStyle = `
    color: red;
    font-weight: bold;
    padding: 1rem;
    border: 1px solid red;
    border-radius: 4px;
  `;

    const stackStyle = `
    color: #666; /* Lighter gray for stack trace */
    font-family: monospace;
    margin: 0; /* Remove default margin for better formatting */
  `;

    return (
        <div style={errorStyle}>
            <h1>Something went wrong!</h1>
            <h4>at App.tsx</h4>
            <p>{error.message}</p>
            {error.stack && (
                <pre>
                    <For each={error.stack.split("\n")} fallback={<></>}>
                        {(line) => <span style={stackStyle}>{line}\n</span>}
                    </For>
                </pre>
            )}
            <button onClick={reset}>Reset</button>
        </div>
    ) as JSX.Element;
};

const Broken: Component = () => {
    throw new Error("Oh No");
    return <>Never Getting Here</>;
};

const App: Component = () => {
    const [page, setPage] = createSignal("TicTacToe");
    return (
        <ErrorBoundary fallback={(error, reset) => <AppError error={error} reset={reset} />}>
            <Switch fallback={<Home />}>
                <Match when={page() === "Home"}>
                    <Home />
                </Match>
                <Match when={page() === "TicTacToe"}>
                    <TicTacToeGame />
                </Match>
                <Match when={page() === "Error"}>
                    <Broken />
                </Match>
            </Switch>
        </ErrorBoundary>
    );
};

export default App;
