import React from "react";
import { ACTIONS } from "../App";

function Keys({ dispatch }) {
  return (
    <div className="btn-container">
      <div
        onClick={() =>
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 7 } })
        }
        className="Btn"
      >
        7
      </div>
      <div
        onClick={() =>
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 8 } })
        }
        className="Btn"
      >
        8
      </div>
      <div
        onClick={() =>
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 9 } })
        }
        className="Btn"
      >
        9
      </div>
      <div
        onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
        className="Btn btn-delete"
      >
        DEL
      </div>
      <div
        onClick={() =>
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 4 } })
        }
        className="Btn"
      >
        4
      </div>
      <div
        onClick={() =>
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 5 } })
        }
        className="Btn"
      >
        5
      </div>
      <div
        onClick={() =>
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 6 } })
        }
        className="Btn"
      >
        6
      </div>
      <div
        onClick={() =>
          dispatch({
            type: ACTIONS.CHOOSE_OPERATION,
            payload: { operation: "+" },
          })
        }
        className="Btn"
      >
        +
      </div>
      <div
        onClick={() =>
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1 } })
        }
        className="Btn"
      >
        1
      </div>
      <div
        onClick={() =>
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 2 } })
        }
        className="Btn"
      >
        2
      </div>
      <div
        onClick={() =>
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 3 } })
        }
        className="Btn"
      >
        3
      </div>
      <div
        onClick={() =>
          dispatch({
            type: ACTIONS.CHOOSE_OPERATION,
            payload: { operation: "-" },
          })
        }
        className="Btn"
      >
        -
      </div>
      <div
        onClick={() =>
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "." } })
        }
        className="Btn"
      >
        .
      </div>
      <div
        onClick={() =>
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 0 } })
        }
        className="Btn"
      >
        0
      </div>
      <div
        onClick={() =>
          dispatch({
            type: ACTIONS.CHOOSE_OPERATION,
            payload: { operation: "÷" },
          })
        }
        className="Btn"
      >
        /
      </div>
      <div
        onClick={() =>
          dispatch({
            type: ACTIONS.CHOOSE_OPERATION,
            payload: { operation: "*" },
          })
        }
        className="Btn"
      >
        x
      </div>
      <div
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
        className="Btn btn-reset"
      >
        RESET
      </div>
      <div
        onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
        className="Btn btn-equality"
      >
        =
      </div>
    </div>
  );
}

export default Keys;
