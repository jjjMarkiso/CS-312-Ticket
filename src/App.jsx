import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main.jsx";
import SignIn from "./pages/signin.jsx";
import SignUp from "./pages/signup.jsx";
import './App.css'

function App() {

    return(
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    );
}

export default App
