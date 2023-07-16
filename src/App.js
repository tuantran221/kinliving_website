import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Styles/App.css"
// import component
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostDetail from "./pages/PostDetail";
import "./Styles/ParentCss/root.css"

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-wrapper-body">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostDetail/>} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
