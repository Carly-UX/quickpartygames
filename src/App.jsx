import { useState } from 'react'
import './App.css'

const GAMES = [
  {
    id: 'skribbl',
    title: 'Skribbl.io',
    players: '2-12 players',
    duration: '10-20 min',
    description: 'A fun drawing and guessing game where players take turns drawing while others try to guess what it is. Perfect for creative teams!',
    tags: ['Drawing', 'Casual', 'Creative'],
    image: '/quickpartygames/images/skribble.svg',
    link: 'https://skribbl.io',
  },
  {
    id: 'pixoguess',
    title: 'PixoGuess',
    players: '2-20 players',
    duration: '15-30 min',
    description: 'Guess what others are drawing pixel by pixel in this fun online drawing game. Race to figure out the picture before it\'s fully revealed!',
    tags: ['Drawing', 'Creative', 'Casual'],
    image: '/quickpartygames/images/pixoguess.svg',
    link: 'https://pixoguess.com/',
  },
  {
    id: 'geoguessr',
    title: 'GeoGuessr',
    players: '1-100 players',
    duration: '15-30 min',
    description: 'Test your geography knowledge! Get dropped in a random location and guess where you are. Great for teams who love travel and exploration.',
    tags: ['Geography', 'Educational', 'Strategy'],
    image: '/quickpartygames/images/geoguessr.svg',
    link: 'https://geoguessr.com',
  },
  {
    id: 'codenames',
    title: 'Codenames Online',
    players: '4-12 players',
    duration: '20-30 min',
    description: 'A word-based party game where two teams compete to identify their agents using one-word clues. Requires clever thinking and teamwork!',
    tags: ['Word Game', 'Strategy', 'Party'],
    image: '/quickpartygames/images/codenames.svg',
    link: 'https://codenames.game',
  },
  {
    id: 'drawbattle',
    title: 'DrawBattle.io',
    players: '2-10 players',
    duration: '10-20 min',
    description: 'Head-to-head drawing duels where players compete to draw the best picture on a given topic. Fast, fun, and creative!',
    tags: ['Drawing', 'Competitive', 'Creative'],
    image: '/quickpartygames/images/drawbattle_io.svg',
    link: 'https://drawbattle.io/',
  },
  {
    id: 'taboo',
    title: 'Play Taboo Online',
    players: '4-12 players',
    duration: '20-30 min',
    description: 'Classic word guessing game where you describe words without using forbidden words. Great for teams and party nights!',
    tags: ['Word Game', 'Party', 'Casual'],
    image: '/quickpartygames/images/taboo.svg',
    link: 'https://playtaboo.online/',
  },
  {
    id: 'spyfall',
    title: 'Spyfall',
    players: '3-8 players',
    duration: '10-15 min',
    description: 'Hidden role game where one player is the spy and must figure out the location while others ask questions.',
    tags: ['Social Deduction', 'Party', 'Strategy'],
    image: '/quickpartygames/images/spyfall.svg',
    link: 'https://spyfall.adrianocola.com/',
  },
  {
    id: 'gartic-phone',
    title: 'Gartic Phone',
    players: '2-20 players',
    duration: '15-30 min',
    description: 'Telephone game meets drawing! Players alternate between drawing and guessing as messages transform down the line.',
    tags: ['Drawing', 'Creative', 'Party'],
    image: '/quickpartygames/images/gartic_phone.svg',
    link: 'https://garticphone.com/',
  },
  {
    id: 'fishbowl',
    title: 'Fishbowl',
    players: '4-20 players',
    duration: '20-30 min',
    description: 'Charades-style game where teams take turns describing words from a hat. Perfect for large group celebrations!',
    tags: ['Word Game', 'Party', 'Creative'],
    image: '/quickpartygames/images/fishbowl.svg',
    link: 'https://fishbowl-game.com/',
  },
  {
    id: 'oneword',
    title: 'One Word',
    players: '2-10 players',
    duration: '10-20 min',
    description: 'Quick-thinking game where players take turns adding one word at a time to create silly stories.',
    tags: ['Word Game', 'Party', 'Casual'],
    image: '/quickpartygames/images/oneword.svg',
    link: 'https://oneword.games/',
  },
  {
    id: 'makeitmeme',
    title: 'Make It Meme',
    players: '3-12 players',
    duration: '20-30 min',
    description: 'Meme-making game where players create funny captions for images. The funniest meme wins! Perfect for laughs and creativity.',
    tags: ['Creative', 'Comedy', 'Party'],
    image: '/quickpartygames/images/makeitmeme.svg',
    link: 'https://makeitmeme.com/join/#SQBYY',
  },
]

const LIGHT_BTN_ICON = 'https://www.figma.com/api/mcp/asset/eaaa397a-bfcb-4d1e-be90-885942133213'
const DARK_BTN_ICON  = 'https://www.figma.com/api/mcp/asset/a3098f8b-e822-4b74-9099-83e87ba3f68e'

const PLAYERS_ICON_LIGHT = 'https://www.figma.com/api/mcp/asset/32cdb9a8-c26d-4975-8562-77ca897e3be1'
const CLOCK_ICON_LIGHT   = 'https://www.figma.com/api/mcp/asset/442bcf00-6c33-4b8f-a46f-a2f18f291186'
const PLAYERS_ICON_DARK  = 'https://www.figma.com/api/mcp/asset/1964e8b6-041a-45ed-8368-c573e54b9a57'
const CLOCK_ICON_DARK    = 'https://www.figma.com/api/mcp/asset/50ec0375-b988-4192-a6f5-b502b1eaf51c'

function GameCard({ game, isDark }) {
  const playersIcon = isDark ? PLAYERS_ICON_DARK : PLAYERS_ICON_LIGHT
  const clockIcon   = isDark ? CLOCK_ICON_DARK   : CLOCK_ICON_LIGHT

  return (
    <a
      href={game.link}
      target="_blank"
      rel="noopener noreferrer"
      className="game-card-link"
    >
      <div className="game-card">
        <div className="card-image-wrapper">
          <img src={game.image} alt={game.title} className="card-image" />
        </div>
        <div className="card-header">
          <h3 className="card-title">{game.title}</h3>
          <div className="card-meta">
            <span className="meta-item">
              <img src={playersIcon} alt="" className="meta-icon" />
              {game.players}
            </span>
            <span className="meta-item">
              <img src={clockIcon} alt="" className="meta-icon" />
              {game.duration}
            </span>
          </div>
        </div>
        <div className="card-content">
          <p className="card-description">{game.description}</p>
          <div className="card-tags">
            {game.tags.map(tag => (
              <span key={tag} className="badge">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </a>
  )
}

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={`page ${isDark ? 'dark' : 'light'}`}>
      <div className="container">
        <header className="page-header">
          <div className="header-text">
            <h1 className="page-title">Quick Party Games</h1>
            <p className="page-subtitle">
              Discover fun online games to play together with friends, family or team
            </p>
          </div>
          <div className="header-action">
            <button className="mode-toggle" onClick={() => setIsDark(!isDark)}>
              <img src={isDark ? DARK_BTN_ICON : LIGHT_BTN_ICON} alt="" className="toggle-icon" />
              {isDark ? 'LIGHT MODE' : 'DARK MODE'}
            </button>
          </div>
        </header>

        <div className="games-grid">
          {GAMES.map(game => (
            <GameCard key={game.id} game={game} isDark={isDark} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
