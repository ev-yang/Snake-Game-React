import {useRef, useEffect} from "react";
import Snake from "./Snake";
import Food from "./Food";

const Play = ({snake, food, move}) => {
    useInterval(move, 100);
    function useInterval(callback, delay) {
        const savedCallback = useRef();

        // Remember the latest callback.
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
          function tick() {
            savedCallback.current();
          }
          if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
          }
        }, [delay]);
    }

    return (
        <>
            {snake.map((square) => (
                <Snake key={square.id} x={square.x} y={square.y} />
            ))}

            {food.map((square) => (
                <Food key={square.id} x={square.x} y={square.y} />
            ))}
        </>
    );
}

export default Play;