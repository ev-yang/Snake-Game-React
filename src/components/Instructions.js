import {Link} from "react-router-dom";

const Instructions = () => {
    return (
        <div className="instructions">
            <h2>Instructions</h2>
            <p>Use the arrow keys to control the direction of the snake (<span className="green">green</span> squares).</p>
            <p>Eat the food (<span className="blue">blue</span> squares) to grow longer.</p>
            <p>Avoid running into yourself or the game borders.</p>
            <Link to="/">Back</Link>
        </div>
    );
}

export default Instructions;