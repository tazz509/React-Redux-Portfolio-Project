import React from 'react'

const Square = ({ id, value, onKeyPress }) => {
  let style = {}
  let left = { borderLeft: "solid 3px" }
  let right= { borderRight: "solid 3px" }

  if (parseInt(id, 10) % 3 === 0)
    style = left;
  else if ((id+1) % 9 === 0)
    style = right;
  return <input id={id} type="text" className="square" style={style} value={value} onKeyPress={onKeyPress} />
}

export default Square