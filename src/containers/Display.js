import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchListings } from '../actions/content';

import Layout from '../components/display/Layout';

export class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    await this.props.fetchListings();
  }

  render() {
    console.log(this.props.listings);
    return (
      <div>
        {this.props.listings && (
          <Layout listings={this.props.listings.groups} />
        )}
      </div>
    );
  }
}

Display.propTypes = {
  listings: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    listings: state.content.listings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListings: () => dispatch(fetchListings()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);
