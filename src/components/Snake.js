const Snake = ({x, y}) => {
    return (
        <div className="snake-square" style={{left: x + "%", top: y + "%"}}/>
    );
}

export default Snake;