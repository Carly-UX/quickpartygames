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
    image: 'https://www.figma.com/api/mcp/asset/ee1b7516-c8b2-41b2-9cc9-6dc9fde9b220',
    link: 'https://skribbl.io',
  },
  {
    id: 'geoguessr',
    title: 'GeoGuessr',
    players: '1-100 players',
    duration: '15-30 min',
    description: 'Test your geography knowledge! Get dropped in a random location and guess where you are. Great for teams who love travel and exploration.',
    tags: ['Geography', 'Educational', 'Strategy'],
    image: 'https://www.figma.com/api/mcp/asset/3b1b19e0-e93a-45f6-a355-b614b09180e0',
    link: 'https://geoguessr.com',
  },
  {
    id: 'codenames',
    title: 'Codenames Online',
    players: '4-12 players',
    duration: '20-30 min',
    description: 'A word-based party game where two teams compete to identify their agents using one-word clues. Requires clever thinking and teamwork!',
    tags: ['Word Game', 'Strategy', 'Party'],
    image: 'https://www.figma.com/api/mcp/asset/1c93d17d-e47f-4e9d-9eac-07a292c18882',
    link: 'https://codenames.game',
  },
  {
    id: 'kahoot',
    title: 'Kahoot!',
    players: '2-unlimited',
    duration: '5-15 min',
    description: 'Create and play quiz-based learning games. Perfect for team building, trivia nights, or training sessions with real-time competition.',
    tags: ['Trivia', 'Educational', 'Quiz'],
    image: 'https://www.figma.com/api/mcp/asset/6c4e4fed-8ae0-4016-90fb-a4aab4850493',
    link: 'https://kahoot.com',
  },
  {
    id: 'escape-team',
    title: 'Escape Team',
    players: '2-6 players',
    duration: '45-60 min',
    description: 'Solve puzzles and riddles together in virtual escape rooms. Great for building collaboration and problem-solving skills.',
    tags: ['Puzzle', 'Mystery', 'Cooperative'],
    image: 'https://www.figma.com/api/mcp/asset/c23deca9-c9ef-4e6e-a4fd-a235fc37c721',
    link: 'https://escapeteam.com',
  },
  {
    id: 'chess',
    title: 'Chess.com',
    players: '2-4 players',
    duration: '10-40 min',
    description: 'Play chess online against teammates or other players. Features team matches, puzzles, and lessons for all skill levels.',
    tags: ['Strategy', 'Board Game', 'Competitive'],
    image: 'https://www.figma.com/api/mcp/asset/43df058e-4bf1-428b-9b60-0d6765e167b5',
    link: 'https://chess.com',
  },
  {
    id: 'among-us',
    title: 'Among Us',
    players: '4-15 players',
    duration: '15-25 min',
    description: 'Work together to complete tasks while identifying imposters among the crew. A social deduction game perfect for team bonding.',
    tags: ['Social Deduction', 'Multiplayer', 'Strategy'],
    image: 'https://www.figma.com/api/mcp/asset/120f82fb-52a9-4531-be54-dc8d31ed64f8',
    link: 'https://www.innersloth.com/games/among-us/',
  },
  {
    id: 'jackbox',
    title: 'Jackbox Party Pack',
    players: '3-10 players',
    duration: '10-30 min',
    description: 'Collection of party games playable via web browser. Everyone uses their phone as a controller for hilarious group entertainment!',
    tags: ['Party', 'Casual', 'Comedy'],
    image: 'https://www.figma.com/api/mcp/asset/fd9f8243-7afe-430a-bd70-88ce686d9eab',
    link: 'https://www.jackboxgames.com',
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
