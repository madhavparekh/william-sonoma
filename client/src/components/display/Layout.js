import React from 'react';
import PropTypes from 'prop-types';
import RenderListing from './RenderListing';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expand: false, isMobile: false };
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
  }

  onWindowResize = () => {
    this.setState({ isMobile: window.innerWidth <= 480 });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          width: this.state.isMobile ? '95%' : '1000px',
          margin: 'auto',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        {this.props.listings &&
          this.props.listings.map((listing, indx) => {
            return (
              <RenderListing
                key={indx}
                listing={listing}
                isMobile={this.state.isMobile}
              />
            );
          })}
      </div>
    );
  }
}

Layout.propTypes = {
  listings: PropTypes.array,
};

export default Layout;
