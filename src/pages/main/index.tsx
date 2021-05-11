import React from 'react';
import './styles.css'
import { RiArrowDownSFill, RiFilePaper2Line, RiCodeSSlashLine } from 'react-icons/ri';
import { FaPaintBrush, FaArrowRight, FaDiceD20 } from 'react-icons/fa';
import { HiOutlineLightBulb, HiVolumeUp } from 'react-icons/hi';

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
        <section className="games-container">
          <h2>Join 5 Million players and GMs playing hundreds of systems.</h2>
          <div className="games-section1">
            <a href="/">
              <img src="./img/dungeons-dragons.png" alt="Dungeons and Dragons"/>
            </a>
            <a href="/">
              <img src="./img/pathfinder2.png" alt="Pathfinder 2"/>
            </a>
            <a href="/">
              <img src="./img/call-of-cthulhu.png" alt="Call of Cthulhu"/>
            </a>
            <a href="/">
              <img src="./img/fate.png" alt="Fate"/>
            </a>
            <a href="/">
              <img src="./img/burn-bryte.png" alt="Burn Bryte"/>
            </a>
          </div>
          <div className="games-section2">
          <a href="/">
            <img src="./img/kids-on-bikes.png" alt="Kids on Bikes"/>
          </a><a href="/">
            <img src="./img/13-age.png" alt="The age 13"/>
          </a><a href="/">
            <img src="./img/fiasco.png" alt="Fiasco"/>
          </a><a href="/">
            <img src="./img/cypher-system.png" alt="Cypher System"/>
          </a><a href="/">
            <img src="./img/dungeon-world.png" alt="Dungeon World"/>
          </a>
          </div>
          <h6>And Many More Games</h6>
        </section>
        <section className="customizable-container">
          <h2>Customizable</h2>
          <div className="customizable-section">
            <div className="customizable-info">  
              <div className="customizable-cards">
                <div>
                  <a href="/">
                    <header>
                      <FaPaintBrush className="card-icon" />
                      <span>Artwork</span>
                    </header>
                    <p>Upload your own or choose from or Marketplace full of talented artists.</p>
                  </a>
                </div>
                <div>
                  <a href="/">
                    <header>
                      <RiFilePaper2Line className="card-icon" />
                      <span>Character Sheets</span>
                    </header> 
                    <p>Hundreds of sheets to automatically track and calculate character information or build your own.</p>
                  </a>
                </div>
                <div>
                  <a href="/">
                    <header>
                      <RiCodeSSlashLine className="card-icon" />
                      <span>Programming Scripts</span>
                    </header>
                    <p>Automate tedious game mechanics: get hundreds of options you can add with one click.</p>
                  </a>
                </div>
                <span className="span-register">
                  <a href="/">
                    <p>
                      Create Free Account
                      <FaArrowRight />
                    </p>           
                  </a>
                </span>
              </div>
            </div>
            <div className="customizable-img">
              <img src="./img/artwork.png" alt="ArtWork"/>
            </div>
          </div>
        </section>
        <section className="community-container">
          <div>
            <img src="./img/community-faces.png" alt="Community"/>
            <img src="./img/world-map.png" className="community-backgroundImg" alt=""/>
          </div>
          <div className="community-info">
            <h2>Community</h2>
            <p>Find people to round out your party, or start with a fresh pack of players. 
              You can even find a game starting right away. All possible because of our huge and amazing community. 
              Once you find them, it’s easy to play and connect with built-in video and voice chat, 
              text chat, and integrated rolling.
            </p>
            <span>
              <a href="/">
                <p>
                  Create Free Account
                  <FaArrowRight />
                </p>           
              </a>
            </span>
          </div>
        </section>
        <section className="alwaysEvolving">
          <div className="alwaysEvolving-header">
            <h2>Always Evolving</h2>
            <p>It's faster, better, and easier to play on Roll20<sup>®</sup>. It’s also always improving. 
              From the best Dice Engine on the internet to immersive features like Dynamic Lighting, 
              Roll20<sup>®</sup> will make your game nights better than you could have imagined possible.
            </p>
            <span className="span-register">
              <a href="/">
                <p>
                  Create Free Account
                  <FaArrowRight />
                </p>           
              </a>
            </span>
          </div>
          <div className="alwaysEvolving-cards-container">
            <div className="alwaysEvolving-cards">
              <div>
                <FaPaintBrush />
                <p>{"Drag & Drop Monsters, Characters, & NPCs"} </p>
              </div>
              <div>
                <HiOutlineLightBulb />
                <p>Dynamic Lighting</p>
              </div>
            </div>
            <img src="./img/software-info.png" alt=""/>
            <div className="alwaysEvolving-cards">
              <div>
                <FaDiceD20 />
                <p>Click-to-Roll Dice </p>
              </div>
              <div>
                <HiVolumeUp />
                <p>{"Video & Voice Chat"}</p>
              </div>
              <div>
                <RiFilePaper2Line />
                <p>Interactive Character Sheets </p>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}

export default Main;