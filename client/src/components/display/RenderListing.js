import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import red from '@material-ui/core/colors/red';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import ImageCarousel from './ImageCarousel';

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

const styles = (theme) => ({
  card: {
    maxWidth: 400,
  },
  title: {
    fontWeight: 'bold',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    cursor: 'pointer',
  },
  actions: {
    display: 'flex',
  },

  avatar: {
    backgroundColor: red[500],
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class RenderListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const { listing, isMobile, classes } = this.props;
    const name = listing.name.replace('&#8482;', '');
    return (
      <div
        style={{
          width: isMobile ? '100%' : '32%',
          margin: '15px 10px 0px 0px',
        }}
      >
        <Card className={classes.card}>
          <a
            href={listing.links.www}
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  ${listing.priceRange.selling.high}
                </Avatar>
              }
              title={name}
            />
          </a>
          <CardMedia
            style={{ cursor: 'link' }}
            className={classes.media}
            image={listing.hero.href}
            title={name}
            onClick={() => this.handleClickOpen()}
          />
        </Card>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          onBackdropClick={() => this.handleClose()}
        >
          <DialogTitle id="alert-dialog-slide-title">{name}</DialogTitle>
          <DialogContent>
            <ImageCarousel images={listing.images} />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleClose()} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

RenderListing.propTypes = {
  listing: PropTypes.object,
  isMobile: PropTypes.bool,
};

export default withStyles(styles)(RenderListing);
