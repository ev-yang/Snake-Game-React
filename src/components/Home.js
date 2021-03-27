import {Link} from "react-router-dom";
import Header from "./Header";

const Home = () => {
    return (
        <div className="menu">
            <Header/>
            <Link to={process.env.PUBLIC_URL + "/play"}>Start game</Link>
            <Link to={process.env.PUBLIC_URL + "/instructions"}>Instructions</Link>
        </div>
    );
}

export default Home;