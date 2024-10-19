import React from 'react';

function Skills() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4" style={{ color: '#6f42c1' }}>My Skills</h1>
      <div className="row text-center">
        {/* Billiard Card */}
        <div className="col-md-3 mb-4">
          <div className="card border-0 shadow-lg" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="card-body">
              <i className="bi bi-billiards" style={{ fontSize: '40px', color: '#6f42c1' }}></i>
              <h5 className="card-title mt-3" style={{ color: '#6f42c1' }}>Billiard</h5>
              <p className="card-text text-muted">Precision, focus, and strategy – key elements of my game.</p>
            </div>
          </div>
        </div>
        {/* Cycling Card */}
        <div className="col-md-3 mb-4">
          <div className="card border-0 shadow-lg" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="card-body">
              <i className="bi bi-bicycle" style={{ fontSize: '40px', color: '#6f42c1' }}></i>
              <h5 className="card-title mt-3" style={{ color: '#6f42c1' }}>Cycling</h5>
              <p className="card-text text-muted">Exploring new places and staying fit on two wheels.</p>
            </div>
          </div>
        </div>
        {/* Basketball Card */}
        <div className="col-md-3 mb-4">
          <div className="card border-0 shadow-lg" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="card-body">
              <i className="bi bi-basketball" style={{ fontSize: '40px', color: '#6f42c1' }}></i>
              <h5 className="card-title mt-3" style={{ color: '#6f42c1' }}>Basketball</h5>
              <p className="card-text text-muted">Teamwork, strategy, and high energy on the court.</p>
            </div>
          </div>
        </div>
        {/* Coding Card */}
        <div className="col-md-3 mb-4">
          <div className="card border-0 shadow-lg" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="card-body">
              <i className="bi bi-laptop" style={{ fontSize: '40px', color: '#6f42c1' }}></i>
              <h5 className="card-title mt-3" style={{ color: '#6f42c1' }}>Coding</h5>
              <p className="card-text text-muted">Bringing ideas to life through web and game development.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
