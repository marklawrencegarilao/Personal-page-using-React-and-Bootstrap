import React from 'react';

function Skills() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">My Skills</h1>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">HTML</h5>
              <p className="card-text">My first skill for building web structure.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">CSS</h5>
              <p className="card-text">Styling web pages with responsive design and aesthetic look.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Java</h5>
              <p className="card-text">Learned from object-oriented programming and data structures and algorithms.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">C#</h5>
              <p className="card-text">Learning this year for game development. (Unity)</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">React</h5>
              <p className="card-text">Learning now for building dynamic user interfaces for web applications.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;