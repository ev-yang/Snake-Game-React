import {Link} from "react-router-dom";

const EndGame = ({score, reset}) => {
    return (
        <div className="end-game">
            <h2>Game over!</h2>
            <p>Your score: {score}</p>
            <Link to={process.env.PUBLIC_URL + "/play"} onClick={reset}>Play again</Link>
            <Link to={process.env.PUBLIC_URL + "/"} onClick={reset}>Home</Link>
        </div>
    );
}

export default EndGame;