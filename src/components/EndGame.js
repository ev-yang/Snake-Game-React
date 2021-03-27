import {Link} from "react-router-dom";

const EndGame = ({score, reset}) => {
    return (
        <div className="end-game">
            <h2>Game over!</h2>
            <p>Your score: {score}</p>
            <Link to="/play" onClick={reset}>Play again</Link>
            <Link to="/" onClick={reset}>Home</Link>
        </div>
    );
}

export default EndGame;