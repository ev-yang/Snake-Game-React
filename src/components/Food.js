const Food = ({x, y}) => {
    return (
        <div className="food-square" style={{left: x + "%", top: y + "%"}}/>
    );
}

export default Food;