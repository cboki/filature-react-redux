export function fetchPosition() {
  const promise = fetch('https://api.wheretheiss.at/v1/satellites/25544')
    .then(response => response.json());

  return {
    type: 'FETCH_POSITION',
    payload: promise
  }
}
