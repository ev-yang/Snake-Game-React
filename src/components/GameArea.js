import {HashRouter as Router, Route, Redirect} from "react-router-dom";
import Home from "./Home";
import Instructions from "./Instructions";
import Play from "./Play";
import Score from "./Score";
import EndGame from "./EndGame";

const GameArea = ({snake, food, move, gameOver, reset}) => {
    return (
        <Router>
        <div className="game-area">
            <Route path="/" exact render={() => (<Home/>)}/>
            <Route path="/instructions" exact component={Instructions}/>
            <Route path="/play" exact>
                {gameOver ? <Redirect to="/end"/> : <Play snake={snake} food={food} move={move}/>}
            </Route>
            <Route path="/end" exact render={() => (<EndGame score={snake.length - 3} reset={reset}/>)}/>
        </div>
        <Route path="/play" exact render={() => (<Score score={snake.length - 3}/>)}/>
        </Router>
    );
}

export default GameArea;