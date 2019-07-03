export const FETCH_POSITION = 'FETCH_POSITION';

export function fetchPosition() {
  const promise = fetch('/api/v1/games/1/positions/random')
    .then(response => response.json());

  return {
    type: FETCH_POSITION,
    payload: promise
  }
}
