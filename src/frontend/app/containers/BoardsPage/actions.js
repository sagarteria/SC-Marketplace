/*
 *
 * BoardsPage actions
 *
 */

import { DEFAULT_ACTION, METABASE_TOKEN_FETCH } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function mebaseTokenFetch() {
  return {
    type: METABASE_TOKEN_FETCH,
  };
}
