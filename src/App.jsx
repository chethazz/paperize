import Navbar from "./components/navbar/Navbar";
import Home from "./components/header/Home";
import Footer from "./components/footer/Footer";

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
