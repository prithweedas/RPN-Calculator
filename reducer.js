const initialState = { stack: [], inputState: "replace" }

const PRESS_NUM = "PRESS_NUM"
const ENTER = "ENTER"
const BACK_SPACE = "BACK_SPACE"
const OPERATION = "OPERATION"
const CLEAR = "CLEAR"

export const pressNum = n => ({
  type: PRESS_NUM,
  payload: n
})
export const clear = () => ({
  type: CLEAR
})

export const enter = () => ({
  type: ENTER
})

export const backSpace = () => ({
  type: BACK_SPACE
})
export const operation = op => ({
  type: OPERATION,
  payload: op
})

const doOperation = (a, b, op) => {
  const x = parseFloat(a)
  const y = parseFloat(b)

  switch (op) {
    case "pow":
      return y ** x
    case "*":
      return y * x
    case "/":
      return y / x
    case "+":
      return y + x
    case "-":
      return y - x
  }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PRESS_NUM:
      if (state.inputState === "append") {
        return {
          stack: [(state.stack[0] || 0) + payload, ...state.stack.slice(1)],
          inputState: "append"
        }
      } else if (state.inputState === "replace") {
        return {
          stack: [payload, ...state.stack.slice(1)],
          inputState: "append"
        }
      } else if (state.inputState === "push") {
        return {
          inputState: "append",
          stack: [payload, ...state.stack]
        }
      }

    case ENTER:
      return {
        inputState: "replace",
        stack: [0, ...state.stack]
      }
    case BACK_SPACE:
      if (state.inputState === "append" || state.inputState === "push") {
        const str = state.stack[0]
        const newStr = str.slice(0, str.length - 1)
        return {
          ...state,
          stack: [newStr, ...state.stack.slice(1)],
          inputState: newStr === "" ? "replace" : "append"
        }
      } else {
        return {
          ...state
        }
      }

    case OPERATION:
      return {
        stack: [
          `${doOperation(state.stack[0], state.stack[1], payload)}`,
          ...state.stack.slice(2)
        ],
        inputState: "push"
      }

    case CLEAR:
      return {
        ...initialState
      }

    default:
      return state
  }
}
