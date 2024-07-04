import "./App.css";
import CreateTodo from "./Page/CreateTodo";
import Profile from "./Page/Profile";
import Todo from "./Page/Todo";
import Login from "./Page/Login";
import Register from "./Page/Register";
import Start from "./Page/Start";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PageNotFound from "./Page/PageNotFound";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Private Routes from here... */}
        <Route
          path="/todo"
          element={
            <PrivateRoutes>
              <Todo />
            </PrivateRoutes>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoutes>
              <Profile />
            </PrivateRoutes>
          }
        />{" "}
        <Route
          path="/createTodo"
          element={
            <PrivateRoutes>
              <CreateTodo />
            </PrivateRoutes>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
