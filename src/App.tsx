import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
