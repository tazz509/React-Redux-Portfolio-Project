import { GET_SCORE } from '../actionTypes'

export default function scoresReducer(state = [], action) {
  switch (action.type) {
    case GET_SCORE: {
      const { type, scores } = action
      return [ ...state, ...scores ]
    }
    
    default:
      return state
  }
}