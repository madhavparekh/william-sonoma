import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

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
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
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
    console.log('opening');
    this.setState({ open: true });
  }

  handleClose() {
    console.log('closing');
    this.setState({ open: false });
  }

  render() {
    const { listing, isMobile, classes } = this.props;
    const name = listing.name.replace('&#8482;', '');
    console.log(this.state.open);
    return (
      <div
        style={{
          width: isMobile ? '100%' : '32%',
          margin: '15px 10px 0px 0px',
        }}
      >
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                ${listing.priceRange.low} "-" {listing.priceRange.selling.high}
              </Avatar>
            }
            title={name}
          />
          <CardMedia
            className={classes.media}
            image={listing.hero.href}
            title={name}
            onClick={() => this.handleClickOpen()}
          />
          <CardContent>
            <Typography component="p">{name}</Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
          </CardActions>
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
