const Square = ({ id, player }) => {
  const [color, setColor] = React.useState('cyan')
  const palet = ['yellow', 'blue', 'green']
  const getRandomColor = () => palet[Math.floor(Math.random() * 3)]
  // keep track of state of the square
  React.useEffect(() => {
    console.log(`Render ${id}`)
    return () => console.log(`unmounting Square ${id}`)
  })
  return (
    // change the color of Square on click
    <button>
      onClick=
      {(e) => {
        setColor(getRandomColor())
        e.target.style.background = color
      }}
      <h1>{id}</h1>
    </button>
  )
}

const Board = () => {
  const [player, setPlayer] = React.useState(1)
  cosnt [(mounted, setMounted] = React.useState(true)
  let status = `Player ${player}`
  const toggle = () => setMounted(!mounted)
  function renderSquare(i) {
    return <Square id={i} player={player}></Square>
  }
  return (
    <div className="game-board">
      <div className="grid-row">
        {mounted && renderSquare(0)}
        {mounted && renderSquare(1)}
        {mounted && renderSquare(2)}
      </div>
      <div id="info">
        <button onClick={toggle}>Show/Hide Row</button>
        <h1>{status}</h1>
      </div>
    </div>
  )
}

// ========================================

ReactDOM.render(<Board />, document.getElementById('root'))
