import "./End.css"

const End = ({retry}) => {
  return (
    <div>
      <h1>End</h1>
      <button onClick={retry}>Reniciar jogo</button>
    </div>
  )
}

export default End
