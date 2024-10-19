import React from 'react';

function Home() {
  return (
    <div className="container mt-5">
      <div className="jumbotron text-center" style={{ backgroundColor: '#6f42c1', color: 'white', padding: '50px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h1 className="display-4">Welcome to My Profile!</h1>
        <p className="lead">I'm passionate about technology and coding. Here you'll find more about me!</p>
        <div className="mt-4">
          <a href="/about" className="btn btn-light btn-lg shadow-sm mx-2">Learn More About Me</a>
          <a href="/contact" className="btn btn-outline-light btn-lg shadow-sm mx-2">Contact Me</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
