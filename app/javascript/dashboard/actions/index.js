export const FETCH_POSITION = 'FETCH_POSITION';

export function fetchPosition(game_id) {
  const url = `/api/v1/games/${game_id}/positions/random`;
  const promise = fetch(url, { credentials: "same-origin" })
    .then(response => response.json());

  return {
    type: FETCH_POSITION,
    payload: promise
  }
}
