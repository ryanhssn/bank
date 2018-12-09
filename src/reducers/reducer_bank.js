import { FETCH_IFSC, FETCH_BRANCH } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_IFSC:
      return [action.payload.data.data, ...state];
      break;
    case FETCH_BRANCH:
      return action.payload.data.data;
      break;
  }
  return state;
}
