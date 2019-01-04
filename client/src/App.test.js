import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import App from './App';

const initialState = {
  content: {
    listings: {
      groups: [
        {
          id: 'organic-luxe-fibrosoft-towels-white-b2650',
          name: 'Organic Luxe Fibrosoft&#8482; Towels - White',
          links: {
            www:
              'https://www.westelm.com/products/organic-luxe-fibrosoft-towels-white-b2650/',
          },
          priceRange: {
            regular: {
              high: 95,
              low: 9,
            },
            selling: {
              high: 69,
              low: 6,
            },
            type: 'special',
          },
          thumbnail: {
            size: 'm',
            meta: '',
            alt: '',
            rel: 'thumbnail',
            width: 363,
            href:
              'https://www.westelm.com/weimgs/rk/images/wcm/products/201847/0012/organic-luxe-fibrosoft-towels-white-m.jpg',
            height: 363,
          },
          hero: {
            size: 'm',
            meta: '',
            alt: '',
            rel: 'hero',
            width: 363,
            href:
              'https://www.westelm.com/weimgs/rk/images/wcm/products/201847/0012/organic-luxe-fibrosoft-towels-white-m.jpg',
            height: 363,
          },
          images: [
            {
              size: 'm',
              meta: '',
              alt: '',
              rel: 'althero',
              width: 363,
              href:
                'https://www.westelm.com/weimgs/rk/images/wcm/products/201848/0001/organic-luxe-fibrosoft-towels-white-1-m.jpg',
              height: 363,
            },
            {
              size: 'm',
              meta: '',
              alt: '',
              rel: 'althero',
              width: 363,
              href:
                'https://www.westelm.com/weimgs/rk/images/wcm/products/201848/0001/organic-luxe-fibrosoft-towels-midnight-m.jpg',
              height: 363,
            },
            {
              size: 'm',
              meta: '',
              alt: '',
              rel: 'althero',
              width: 363,
              href:
                'https://www.westelm.com/weimgs/rk/images/wcm/products/201848/0001/organic-luxe-fibrosoft-towels-white-m.jpg',
              height: 363,
            },
          ],
          swatches: [],
          messages: ['Free Shipping with code BEST'],
          flags: [
            {
              bopisSuppress: false,
              rank: 5,
              id: 'mono',
            },
            {
              bopisSuppress: false,
              rank: 7,
              id: 'organic',
            },
          ],
          reviews: {
            recommendationCount: 0,
            likelihood: 0,
            reviewCount: 0,
            averageRating: 0,
            id: 'organic-luxe-fibrosoft-towels-white-b2650',
            type: 'GROUP_REVIEWS',
          },
        },
      ],
    },
  },
};

const mockStore = configureStore();

const store = mockStore(initialState);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
