
const squareStyle = {
  width: 100,
  height: 100,
  backgroundColor: "green",
  border: "1px solid #000",
};
const rowStyle = {
  width: 800,
  height: 100,
  display: "flex",
  border: "1px solid #000",
};
const boardStyle = {
  width: 800,
  height: 800,
  margin: "40px auto 0",
  borderBottom: "1px solid #000",
};
const pieceStyle = {
  fontSize: "84px",
  margin: 0,
  paddingLeft: "8px",
}

const boardState = [
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "w", "b", "-", "-", "-"],
  ["-", "-", "-", "b", "w", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"],
]
window.boardState = boardState
console.log(boardState[3][3]);

const isPiece = ({row, col}) => boardState[row][col];
const Piece = ({color}) => <p style={{...pieceStyle, ...color}}>●</p>;

const isWhite = ({row, col}) => {
  const piece = isPiece({row, col});
  if (piece === "w") {
    return true;
  }
}

const isBlack = ({row, col}) => {
  const piece = isPiece({row, col});
  if (piece === "b") {
    return true;
  }
}

const changeWhite = ({row, col}) => boardState[row][col] = "w";

const ItemSquare = ({col, row, color}) => {
  return (
    <div style={squareStyle} row={row} col={col}>
      <Piece color={color}/>
    </div>
  )
}

const Square = ({col, row}) => {
  if (isWhite({row, col})) {
    return <ItemSquare style={squareStyle} row={row} col={col} color={{color: "white"}}/>
  }
  if (isBlack({row, col})) {
    return <ItemSquare style={squareStyle} row={row} col={col} color={{color: "black"}}/>
  }
  return <div className="square" style={squareStyle} col={col} row={row} onClick={() => changeWhite({row, col})}/>
};

const size = 8;

const Row = ({row}) => (
  <div className="board-row" style={rowStyle}>
    {[...Array(size)].map((_, col) => {
      return <Square row={row} col={col}/>
    })}
  </div>
);

const Board = () => {
  return (
    <div style={boardStyle}>
      {[...Array(size)].map((_, i) => (
        <Row row={i} col={i}/>
      ))}
    </div>
  );
};
const ReversiBoard = () => {
  return <Board />;
};

export default ReversiBoard;
