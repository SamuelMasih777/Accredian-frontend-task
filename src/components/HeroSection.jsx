import React, { useState } from 'react';
import { Button, Modal, Backdrop, Fade, Container, makeStyles } from '@material-ui/core';
import ReferralFormModal from './RefferalModal';
import heroImage from '../asset/homeimg.png'; // Replace with your image path
import NavigationBar from './NavigationBar';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0),
    textAlign: 'center',
    borderRadius: theme.spacing(2)
  },
  imageContainer: {
    position: 'relative',
    maxWidth: '100%',
    height: 'auto',
    marginBottom: theme.spacing(2),
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Adding box shadow to the image container
    borderRadius: theme.spacing(2), // Adding border radius to make corners rounded
    overflow: 'hidden', // Ensures the button stays inside the image container
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  button: {
    position: 'absolute',
    bottom: theme.spacing(12),
    left: theme.spacing(20),
    color: 'white',
    backgroundColor: '#3385ff', // Blue color for the button
    padding: theme.spacing(1.75),
    textTransform: 'none', // Prevents the button text from being uppercase
  },
  heroSection: {
    padding: '50px',
    backgroundColor: 'white',
    // marginTop: theme.spacing(0),
  },
  navBar: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(1, 2), // Adding padding to the navbar
    borderRadius: theme.shape.borderRadius, // Adding rounded borders
    marginTop: theme.spacing(2), // Adding margin top to the navbar
    marginBottom: theme.spacing(4),
  },
  navButton: {
    textTransform: 'none',
    '&.active': {
      color: '#3385ff',
      fontWeight: 'bold',
    },
  },
}));

function HeroSection() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div id="refer" className={classes.heroSection}>
      <Container>
        <NavigationBar
          navBarClass={classes.navBar}
          navButtonClass={classes.navButton}
        />
        <div className={classes.imageContainer}>
          <img src={heroImage} alt="Hero Image" className={classes.image} />
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpen}
            className={classes.button}
            size="large"
          >
            REFER NOW
          </Button>
        </div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{ timeout: 500 }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <ReferralFormModal handleClose={handleClose} />
            </div>
          </Fade>
        </Modal>
      </Container>
    </div>
  );
}

export default HeroSection;
