import "./App.css";
import { Board } from "./components/board/board";
import { Header } from "./components/header/header";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Board />
    </div>
  );
};
