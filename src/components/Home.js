import {Link} from "react-router-dom";
import Header from "./Header";

const Home = ({reset}) => {
    return (
        <div className="menu">
            <Header/>
            <Link to="/play" onClick={reset}>Start game</Link>
            <Link to="/instructions">Instructions</Link>
        </div>
    );
}

export default Home;