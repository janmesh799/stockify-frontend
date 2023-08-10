import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar/Navbar.jsx";
import store from "./store/store.js";
import Home from "./components/Home/Home.jsx";
function App() {
  let [loading, setLoading] = useState(true);
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
