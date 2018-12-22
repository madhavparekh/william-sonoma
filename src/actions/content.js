import request from 'superagent';
import ContentTypes from '../action-types/Content';
const types = ContentTypes;

const LISTING_URL = '/services/catalog/v4/category/shop/new/all-new/index.json';

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
