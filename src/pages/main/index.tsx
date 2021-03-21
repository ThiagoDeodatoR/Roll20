import React from 'react';
import './styles.css'
import { RiArrowDownSFill } from 'react-icons/ri';

import Card from '../../components/Cards'
import Button from '../../components/Button';

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
            {/* <a href="/">Create Free Account</a> */}
            <Button/>
            <p>Play games anywhere. Share them with anyone. 
              With Roll20® as your virtual tabletop, 
              your adventures are limitless.
            </p>
          </section>
          <section className="hero-img">
            <img src="img/hero.png" alt="Hero"/>
          </section>
        </div>
        <div className="getStarted-container">
          <section className="get-started">
            <h1>How To Get Started</h1>
            <div className="cards-container">
              <Card 
                imgUrl="./img/icon-sign-up.png" 
                HeaderT="Sign Up" 
                info="Create your free account. Everything else is right in your browser - nothing to download or install."
              />
              <Card 
                imgUrl="./img/icon-choose-game.png" 
                HeaderT="Choose a Game" 
                info="Build your own from scratch, buy a ready-to-play adventure in the Roll20® Marketplace, or join someone’s game."
              />
              <Card 
                imgUrl="./img/icon-invite-friends.png" 
                HeaderT="Invite Friends" 
                info="Share a link with your existing group or find a new party with the Join a Game feature."
              />
              <Card 
                imgUrl="./img/icon-play.png" 
                HeaderT="Play" 
                info="Start gaming! We’ve got you covered from basic rolls to advanced calculations, turn trackers to simple markers."
              />
            </div>
            <Button/>
          </section>
        </div>
      </>
  );
}

export default Main;