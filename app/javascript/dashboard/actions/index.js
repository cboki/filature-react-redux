export const FETCH_POSITION = 'FETCH_POSITION';
export const FETCH_MISSIONS = 'FETCH_MISSIONS';

const BASE_URL = '/api/v1';

export function fetchPosition(game_id) {
  const url = `${BASE_URL}/games/${game_id}/positions/random`;
  const promise = fetch(url)
    .then(response => response.json());

  return {
    type: FETCH_POSITION,
    payload: promise
  }
}

export function fetchMissions() {
  const url = `${BASE_URL}/missions`;
  const promise = fetch(url)
    .then(response => response.json());

    return {
      type: FETCH_MISSIONS,
      payload: promise
    }
}
