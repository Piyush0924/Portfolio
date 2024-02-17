// Skills.js

import React from 'react';
import './Skills.css'; // Import the CSS file

const Skills = () => {
  return (
    <div>
      <div className="box">
        <div className="inside">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Languages</h3>
              <ul className='list'>
                <li>JavaScript</li>
                <li>C language</li>
                {/* Add more languages as needed */}
                {/* Add more languages as needed */}
              </ul>
            </div>
          </div>
        </div>

        <div className="inside">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Library and Framework</h3>
              <ul className='list'>
                <li>Bootstrap</li>
                <li>Tailwind</li>
                <li>React.js</li>
                <li>Next.js</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="inside">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Database</h3>
              <ul className='list'>
                <li>MongoDB</li>
                <li>MySQL</li>
                {/* Add more databases as needed */}
                {/* Add more databases as needed */}
              </ul>
            </div>
          </div>
        </div>

        <div className="inside">
          {/* Add content for the fourth section */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
