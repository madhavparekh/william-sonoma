import ContentTypes from '../action-types/Content';
import objectAssign from 'object-assign';

const types = ContentTypes;

type STATE = {};
type ACTION = {};
const initialState: STATE = {
  listings: null,
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.FETCH_LISTINGS:
      return objectAssign({}, state, { listings: action.listings });
    default:
      return state;
  }
}
