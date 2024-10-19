import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: 'linear-gradient(90deg, #6f42c1, #9b59b6)' }}>
            <div className="container-fluid">
              <Link className="navbar-brand" to="/" style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
                Jesryl Saliente Capales
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-text">Menu</span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/" style={{ fontSize: '1.1rem', padding: '10px 20px' }} 
                    onMouseOver={(e) => e.target.style.color = '#fff'} 
                    onMouseOut={(e) => e.target.style.color = '#dcdcdc'}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about" style={{ fontSize: '1.1rem', padding: '10px 20px' }} 
                    onMouseOver={(e) => e.target.style.color = '#fff'} 
                    onMouseOut={(e) => e.target.style.color = '#dcdcdc'}>
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/skills" style={{ fontSize: '1.1rem', padding: '10px 20px' }} 
                    onMouseOver={(e) => e.target.style.color = '#fff'} 
                    onMouseOut={(e) => e.target.style.color = '#dcdcdc'}>
                      Skills
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact" style={{ fontSize: '1.1rem', padding: '10px 20px' }} 
                    onMouseOver={(e) => e.target.style.color = '#fff'} 
                    onMouseOut={(e) => e.target.style.color = '#dcdcdc'}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
