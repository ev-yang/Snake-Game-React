import {useState, useEffect} from "react";
import GameArea from "./components/GameArea";

const App = () => {

  useEffect(() => {
    document.onkeydown = keyPress;
  }, []);

  // food squares
  const [food, setFood] = useState([getFood(1), getFood(2), getFood(3)]);

  // snake squares
  const [snake, setSnake] = useState([
    {
      id: 1,
      x: 10,
      y: 10
    },
    {
      id: 2,
      x: 12,
      y: 10
    },
    {
      id: 3,
      x: 14,
      y: 10
    }
  ]);

  // snake direction
  const [direction, setDirection] = useState("right");

  // game over
  const [gameOver, setGameOver] = useState(false);

  // move snake
  function keyPress(e) {
    e = e || window.event;
    if (e.keyCode === 37) {
      setDirection("left");
    } else if (e.keyCode === 38) {
      setDirection("up");
    } else if (e.keyCode === 39) {
      setDirection("right");
    } else if (e.keyCode === 40) {
      setDirection("down");
    }
  }

  // move snake forward one unit in current direction
  function moveSnake() {
    let front = snake[snake.length - 1];
    let newFront = {
      id: snake[0].id,
      x: front.x,
      y: front.y
    }
    if (direction === "left") {
      newFront.x = front.x - 2;
    } else if (direction === "up") {
      newFront.y = front.y - 2;
    } else if (direction === "right") {
      newFront.x = front.x + 2;
    } else if (direction === "down") {
      newFront.y = front.y + 2;
    }
    let newSnake = [...snake, newFront];
    if (!checkFood(newSnake) && !checkGameOver(newSnake)) {
      setSnake(newSnake.slice(1));
    }
  }

  // check if snake found food. if so, enlarge snake.
  function checkFood(snake) {
    let front = snake[snake.length - 1];
    for (let i = 0; i < food.length; i++) {
      let square = food[i];
      if (square.x === front.x && square.y === front.y) {
        // enlarge snake
        snake[snake.length - 1].id = snake.length;
        setSnake(snake);
        // new food
        let newFood = [...food];
        newFood[i] = getFood(i + 1);
        setFood(newFood);
        return true;
      }
    }
    return false;
  }

  // check if snake hit border or self. if so, end game.
  function checkGameOver(snake) {
    let front = snake[snake.length - 1];
    if (front.x < 0 || front.y < 0 || front.x > 100 || front.y > 100) {
      setGameOver(true);
      return true;
    }
    for (let i = 0; i < snake.length - 1; i++) {
      let square = snake[i];
      if (square.x === front.x && square.y === front.y) {
        setGameOver(true);
        return true;
      }
    }
    return false;
  }

  // random coordinates for food from 0 to 50
  function getFood(id) {
    let x = Math.floor((Math.random() * 50)) * 2;
    let y = Math.floor((Math.random() * 50)) * 2;
    return {
      id: id,
      x: x,
      y: y
    };
  }

  // resets game to play again
  function resetGame() {
    setGameOver(false);
    setDirection("right");
    setSnake([
      {
        id: 1,
        x: 10,
        y: 10
      },
      {
        id: 2,
        x: 12,
        y: 10
      },
      {
        id: 3,
        x: 14,
        y: 10
      }
    ]);
    setFood([getFood(1), getFood(2), getFood(3)]);
  }

  return (
    <div className="App">
      <GameArea snake={snake} food={food} move={moveSnake} gameOver={gameOver} reset={resetGame}/>
    </div>
  );
}

export default App;
