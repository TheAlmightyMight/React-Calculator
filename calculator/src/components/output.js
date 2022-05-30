import React from "react";

function Output({ data, formatOperand }) {
  const { currentOperand, previousOperand, operation, result } = data;
  console.log(currentOperand);
  return (
    <div className="input-container">
      <div className="previous-operand">
        {formatOperand(previousOperand)}
        {operation}
      </div>
      <div className="current-operand">{formatOperand(currentOperand)}</div>
    </div>
  );
}

export default Output;
