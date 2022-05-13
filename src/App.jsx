import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home.jsx';
import './App.css';

function App() {
  return (
    <div id="app">
      <h1 className="tags">{'<html>'}</h1>
      <div className="indent">
        <h1 className="tags">{'<body>'}</h1>
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
                {/* <Route
            path="/home"
            element={
              <>
                <div className="stick">
                  <NavBar />
                  <Filter />
                </div>
                <Home />
              </>
            }
          /> */}
              </Routes>
            </Router>
          </div>
        </div>
        <h1 className="tags">{'</body>'}</h1>
      </div>
      <h1 className="tags">{'</html>'}</h1>
    </div>
  );
}

export default App;
