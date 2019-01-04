import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';
import ImageCarousel from './ImageCarousel';

configure({ adapter: new Adapter() });

const images = [
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
];

describe('ImageCarousel', () => {
  it('should render correctly', () => {
    const output = shallow(<ImageCarousel images={images} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
