import { getScore } from '../actions.js';

export function FetchScores() {
  return (dispatch) => {
    dispatch({ type: 'SCORES_REQUEST' });
    return fetch('http://localhost:3001/api/v1/high_scores')
      .then(response => response.json())
      .then(scores => dispatch(getScore(scores)));
  };
}
