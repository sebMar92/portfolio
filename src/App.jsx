import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home.jsx';
import './App.css';

function App() {
  return (
    <div id="app">
      <h2 className="tags">{'<html>'}</h2>
      <div className="indent">
        <h2 className="tags">{'<body>'}</h2>
        <div className="indent">
          <div id="nav-spacer">
            <Router>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Home />
                    </>
                  }
                />
              </Routes>
            </Router>
          </div>
        </div>
        <h2 className="tags">{'</body>'}</h2>
      </div>
      <h2 className="tags">{'</html>'}</h2>
    </div>
  );
}

export default App;
