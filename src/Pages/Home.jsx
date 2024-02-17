import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import photo from "./photo.jpg";

const Home = () => {
  return (
    <div>
      <div className='firstSection'>
        <div className='left'>
          <img className='img' src={photo} alt="img" />
        </div>
        <div className='right'>
          <span className='hello'>Hello!!!</span><br />
          <span className='introtext'><br />
            Your Meeting with ...<span className='introname'>Piyush</span><h2><br /><br /> FullStack WebDeveloper</h2>
          </span><br />

          <p className='intropara'><br />
            On a mission to craft seamless and engaging digital experiences. From dynamic front-end designs to robust back-end solutions, I bring ideas to life with a passion for clean code and innovative solutions. Explore my portfolio and discover the world where design meets functionality!
            <br />
            <br />
            
            
          </p>

          <Link to="/hire-me"> {/* Specify the correct 'to' prop with the target route */}
            <button className='hiremebtn'>
              Resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
