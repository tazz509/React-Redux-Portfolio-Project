import { NEW_GAME, ENTER_VALUE } from '../actionTypes'

export default function boardReducer(state = {}, action) {
  switch (action.type) {
    case NEW_GAME: {
      const { type, start_board, solution_board } = action
      return { ...state, current_board: [...start_board], start_board, solution_board, start_time: Date.now(), end_time: null, solved: false }
    }
    
    case ENTER_VALUE: {
      const { type, array_index, value } = action
      var new_board = state.current_board
      new_board[array_index] = value
      return { ...state, current_board: new_board }
    }
    
    default:
      return state
  }
}