import React from 'react';
import { Fragment } from 'react';
import { Box, Link, AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'white',
    color: 'black',
    boxShadow: 'none',
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },
  title: {
    marginRight: theme.spacing(2),
    color: '#3385ff',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    color: 'white',
    backgroundColor: '#3385ff',
    marginRight: theme.spacing(2),
    '&:hover': {
      backgroundColor: '#2667b0',
    },
  },
  loginButton: {
    backgroundColor: theme.palette.grey[300],
    color: 'black',
    marginRight: theme.spacing(2),
  },
  banner: {
    backgroundColor: '#e6eeff',
    color: 'black', // Text color set to black
    padding: theme.spacing(1, 4),
    display: 'flex',
    justifyContent: 'center', // Centering content horizontally
    alignItems: 'center',
    marginBottom: theme.spacing(0), // Adding margin bottom for separation
  },
  bannerText: {
    fontSize: '0.9rem',
    marginRight: theme.spacing(2),
  },
  contactButton: {
    color: theme.palette.info.main,
    backgroundColor: '#e6eeff',    
    '&:hover': {
      backgroundColor: theme.palette.grey[100],
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <Fragment>
      <Box className={classes.banner}>
        <Typography className={classes.bannerText}>
          Navigate your ideal career path with tailored expert advice
        </Typography>
        <Button className={classes.contactButton} variant="contained" size="small">
          Contact Expert
        </Button>
      </Box>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <div className={classes.buttonContainer}>
            <Typography variant="h6" className={classes.title}>
              <Link href="/" color="inherit" className={classes.accentText}>
                accredian
              </Link>
            </Typography>
            <Button className={classes.button} component={Link} href="/courses">
              Courses
            </Button>
          </div>
          <div style={{ flexGrow: 1 }} /> {/* Spacer to push following items to the right */}
          <Button color="inherit">Refer & Earn</Button>
          <Button color="inherit">Resources</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit" className={classes.loginButton}>
            Login
          </Button>
          <Button variant="contained" className={classes.button}>
            Try for Free
          </Button>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

export default Header;
