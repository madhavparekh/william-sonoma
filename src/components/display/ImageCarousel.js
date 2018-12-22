import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';

class ImageCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }
  render() {
    const { images } = this.props;
    const { index, direction } = this.state;
    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        {images.map((image, indx) => {
          return (
            <Carousel.Item key={indx}>
              <img alt={`img_${indx}`} src={image.href} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}

ImageCarousel.propTypes = {
  images: PropTypes.array,
};

export default ImageCarousel;
