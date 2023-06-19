import { Routes, Route, useNavigate } from "react-router-dom";
import SignIn from "./pages/Signin/signIn";
import SignUp from "./pages/Signup/signup";
import TodoList from "./pages/Todolist/todoList";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/todo");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/todo" element={<TodoList />} />
    </Routes>
  );
}

export default App;
