import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Startups from "./pages/Startups";
import Mentors from "./pages/Mentors";
import Enablers from "./pages/Enablers";
import Series from "./pages/Series";
import AdminAuth from "./components/AdminAuth";
import IndividualPost from './components/IndividualPost'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main_content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/startups" element={<Startups />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/enablers" element={<Enablers />} />
            <Route path="/i2useries" element={<Series />} />
            <Route path="/adminPublish" element={<AdminAuth />} />
            <Route path="/post/:id" element={<IndividualPost />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
