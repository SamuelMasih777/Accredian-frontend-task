import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, makeStyles, Button, Modal, Backdrop, Fade } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ReferralFormModal from './RefferalModal'; // Replace with your modal component

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(8, 0),
    backgroundColor: '#e6eeff', // Light blue background color
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    backgroundColor:"#ccdcff",
    padding: theme.spacing(6),
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '50%', // Making the paper circular
    boxShadow: '0px 0px 15px 5px rgba(0,0,0,0.1)', // Adding shadow to the right side
    transition: 'box-shadow 0.3s ease', // Smooth transition for hover effect
    '&:hover': {
      boxShadow: '10px 0px 30px 5px rgba(0,0,0,0.3)', // Increased shadow on hover
    },
  },
  icon: {
    fontSize: 48,
    marginBottom: theme.spacing(2),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
  },
  button: {
    padding: theme.spacing(2),
    color: 'white',
    backgroundColor: '#3385ff', // Blue color for the button
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalPaper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0),
    borderRadius: theme.spacing(2), // Adding border radius to the modal
  },
  typography: {
    marginBottom: theme.spacing(8), // Adding margin bottom to Typography
    "& span": {
      color: '#3385ff',
    },
  },
}));

function BenefitsSection() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section id="benefits" className={classes.section}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom className={classes.typography}>
          How Do I <span>Refer?</span>
        </Typography>
        <Grid container spacing={4} justifyContent='center'>
          <Grid item xs={12} md={3}>
            <Paper className={classes.paper} elevation={3}>
              <PersonAddIcon className={classes.icon} color="primary" />
              <Typography variant="h6" gutterBottom>
                Submit Referrals
              </Typography>
              <Typography>
                Submit referrals easily via our website's referral section.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper className={classes.paper} elevation={3}>
              <AttachMoneyIcon className={classes.icon} color="primary" />
              <Typography variant="h6" gutterBottom>
                Earn Rewards
              </Typography>
              <Typography>
                Earn rewards once your referral joins an Accredian program.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper className={classes.paper} elevation={3}>
              <CardGiftcardIcon className={classes.icon} color="primary" />
              <Typography variant="h6" gutterBottom>
                Receive Bonus
              </Typography>
              <Typography>
                Both parties receive a bonus 30 days after program enrollment.
              </Typography>
            </Paper>
          </Grid>
          {/* Button Container */}
          <Grid item xs={12}>
            <div className={classes.buttonContainer}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                size="large"
                onClick={handleOpen} // Open modal on button click
              >
                Refer Now
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>

      {/* Modal */}
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
          <div className={classes.modalPaper}>
            <ReferralFormModal handleClose={handleClose} />
          </div>
        </Fade>
      </Modal>
    </section>
  );
}

export default BenefitsSection;
