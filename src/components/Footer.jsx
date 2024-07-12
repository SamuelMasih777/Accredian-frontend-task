import React from 'react';
import { 
  Container, Grid, Typography, Link, makeStyles, Button, AppBar, Toolbar 
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  topBar: {
    backgroundColor: theme.palette.common.black,
    padding: theme.spacing(1, 0),
  },
  logo: {
    color: theme.palette.common.white,
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  callButton: {
    backgroundColor: '#3385ff',
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  footer: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    padding: theme.spacing(6, 0),
  },
  link: {
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.grey[400],
    },
  },
  socialIcon: {
    marginRight: theme.spacing(1),
  },
  programItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
}));

function Footer() {
  const classes = useStyles();

  const programs = [
    'Data Science & AI',
    'Product Management',
    'Business Analytics',
    'Digital Transformation',
    'Business Management',
    'Project Management',
    'Strategy & Leadership',
    'Senior Management',
    'Fintech',
  ];
  
  return (
    <>
    <section id="support">
      <AppBar position="static" className={classes.topBar}>
        <Container>
          <Toolbar disableGutters>
            <Typography variant="h6" className={classes.logo} style={{flexGrow: 1}}>
              accredian
            </Typography>
            <Button 
              variant="contained" 
              className={classes.callButton}
            >
              Schedule 1-on-1 Call Now
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <footer className={classes.footer}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={3}>
              <Typography variant="h6" gutterBottom>
                Programs
              </Typography>
              {programs.map((program, index) => (
                <div key={index} className={classes.programItem}>
                  <Typography variant="body2">{program}</Typography>
                  <AddIcon fontSize="small" />
                </div>
              ))}
            </Grid>
            <Grid item xs={12} sm={5}>
              <Typography variant="h6" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2">
                Email us (For Data Science Queries): admissions@accredian.com<br />
                Email us (For Product Management Queries):pm@accredian.com<br />
                Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)<br />
                Product Management Admission Helpline:+91 9625811095<br />
                Enrolled Student Helpline: +91 7869322507<br />
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015
              </Typography>
              <Typography variant="h6" gutterBottom style={{marginTop: '16px'}}>
                Why Accredian
              </Typography>
              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <Link href="#" className={classes.link}>
                <FacebookIcon className={classes.socialIcon} />
              </Link>
              <Link href="#" className={classes.link}>
                <LinkedInIcon className={classes.socialIcon} />
              </Link>
              <Link href="#" className={classes.link}>
                <TwitterIcon className={classes.socialIcon} />
              </Link>
              <Link href="#" className={classes.link}>
                <InstagramIcon className={classes.socialIcon} />
              </Link>
              <Link href="#" className={classes.link}>
                <YouTubeIcon className={classes.socialIcon} />
              </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>
                Accredian
              </Typography>
              <Typography variant="body2" component="div">
                <Link href="#" className={classes.link}>About</Link><br />
                <Link href="#" className={classes.link}>Career</Link><br />
                <Link href="#" className={classes.link}>Blog</Link><br />
                <Link href="#" className={classes.link}>Admission Policy</Link><br />
                <Link href="#" className={classes.link}>Referal Policy</Link><br />
                <Link href="#" className={classes.link}>Privacy Policy</Link><br />
                <Link href="#" className={classes.link}>Terms Of Service</Link><br />
                <Link href="#" className={classes.link}>Master FAQs</Link>
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body2" style={{marginTop: '16px', textAlign: 'center'}}>
            © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
          </Typography>
        </Container>
      </footer>
      </section>
    </>
  );
}

export default Footer;