import { NEW_GAME, ENTER_VALUE, SOLUTION_CHECK, GET_SCORE } from './actionTypes'

export const newGame = (start_board, solution_board) => {
  return {
    type: NEW_GAME, start_board, solution_board
  }
}

export const enterValue = (array_index, value) => {
  return {
    type: ENTER_VALUE, array_index, value
  }
}

export const solutionCheck = (current_board, solution_board) => {
  return {
    type: SOLUTION_CHECK
  }
}

export const getScore = (scores) => {
  return {
    type: GET_SCORE, scores
  }
}
