import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Registration from "./components/Registration";
import Login from "./components/Login";
import User from "./components/User";
import ExpenseTrackerLandingPage from "./pages/MainPage";

function App() {
  const userId = localStorage.getItem("user_id");
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
             <ExpenseTrackerLandingPage/>
            }
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/userPage/:user_id" element={<User />} />
          <Route
            path="/userPage"
            element={<h1>Wrong UserName or password!!</h1>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
