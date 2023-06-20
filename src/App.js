import { Routes, Route, useNavigate } from "react-router-dom";
import SignIn from "./pages/Signin/signIn";
import SignUp from "./pages/Signup/signup";
import TodoList from "./pages/Todolist/todoList";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/todo");
    }
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<SignIn />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/todo" element={<TodoList />} />
    </Routes>
  );
}

export default App;
