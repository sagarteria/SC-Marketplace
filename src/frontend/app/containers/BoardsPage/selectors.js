import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the boardsPage state domain
 */

const selectBoardsPageDomain = state => state.boardsPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BoardsPage
 */

const makeSelectBoardsPage = () =>
  createSelector(
    selectBoardsPageDomain,
    substate => substate,
  );

export default makeSelectBoardsPage;
export { selectBoardsPageDomain };
