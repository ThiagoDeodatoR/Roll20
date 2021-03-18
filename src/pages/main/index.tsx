import React from 'react';
import './styles.css'
import { RiArrowDownSFill } from 'react-icons/ri';

const Main: React.FC = () => {
  return (
      <>
        <header>
          <div className="logo">
            <a href="/">
              <img src="img/roll20-logo.png" alt="Roll20"/>
            </a>
          </div>
          <nav className="nav-menu">
            <ul>
              <li>
                <a href="/">Play Now</a>
              </li>
              <li>
                <a href="/">Join a Game</a>
              </li>
              <li>
                <a href="/">Market Place</a>
              </li>
              <li>
                <a href="/">Tools</a>
              </li>
              <li>
                <a href="/">Community</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">
                  Sign In
                    <RiArrowDownSFill className="iconDown"/>
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="hero-introduction">
          <section className="hero-info"> 
            <h1>
              <span>Your Friends.</span>
              <span>Your Games.</span>
              <span>Your Table.</span>
            </h1>
            <a href="/">Create Free Account</a>
            <p>Play games anywhere. Share them with anyone. 
              With Roll20® as your virtual tabletop, 
              your adventures are limitless.
            </p>
          </section>
          <section className="hero-img">
            <img src="img/hero.png" alt="Hero"/>
          </section>
        </div>
      </>
  );
}

export default Main;