export function PostScore(name, score) {
    fetch('http://localhost:3001/api/v1/high_scores', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        time: score
      })
    })
}
