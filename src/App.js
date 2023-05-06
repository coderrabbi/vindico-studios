import "./App.css";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";

import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-[#0d0000] app">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
