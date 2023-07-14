import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./Styles/app.module.css";
function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles["primary_color"]}>
        <Home />
       
      </div>
      <Footer />
    </div>
  );
}

export default App;
