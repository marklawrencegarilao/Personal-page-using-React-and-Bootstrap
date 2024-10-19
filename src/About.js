import React from 'react';

function About() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-header" style={{ backgroundColor: '#6f42c1', color: 'white' }}>
              <h2>About Me</h2>
            </div>
            <div className="card-body">
              <p>
                I am a 3rd Year Computer Science student with a passion for coding and exploring new technologies. I enjoy building web applications and experimenting with game development.
              </p>
              <p>
                When I'm not coding, you can find me on the basketball court, playing baseball, enjoying a game of billiards, or cycling around. I believe in a balanced life where hobbies and learning go hand in hand, helping me grow both as a developer and as an individual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
