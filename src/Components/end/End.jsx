import "./End.css"

const End = ({retry, score}) => {
  return (
    <div className="endGame">
      <h1>Fim de Jogo!</h1>
      <h1>sua pontuação foi: <span>000</span></h1>
      <button onClick={retry}>Reniciar jogo</button>
    </div>
  )
}

export default End
