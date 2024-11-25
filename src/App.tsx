import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import React, { useReducer } from "react";
import Quiz from "./pages/quiz";
import Header from "./components/Header";
import Finish from "./pages/finish";
import reducer from "./reducer";
import { initialState } from "./reducer/store";

const App: React.FC = () => {
  const [{ username }, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="max-w-[64rem] m-auto p-6">
      <Header username={username} />
      <Routes>
        <Route index path="/quiz" element={<Main />} />
        <Route path="/quiz/game/finish" element={<Finish username={username} />} />
        <Route
          path="/quiz/game"
          element={<Quiz setUsername={dispatch} username={username} />}
        />
      </Routes>
    </div>
  );
};

export default App;
