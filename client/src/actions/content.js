import request from 'superagent';
import ContentTypes from '../action-types/Content';
const types = ContentTypes;

const LISTING_URL = '/api';

const fetchListingsObj = (listings) => {
  return {
    type: types.FETCH_LISTINGS,
    listings,
  };
};

export function fetchListings() {
  return async (dispatch) => {
    const listings = await request.get(LISTING_URL);
    dispatch(fetchListingsObj(listings.body));
  };
}
