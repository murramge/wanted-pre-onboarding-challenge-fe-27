import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/login";
import SignUp from "./auth/signUp";
import TodoList from "./todo/todolist";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signUp" element={<SignUp />} />
        <Route path="/" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
