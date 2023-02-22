import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Grid } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
root: {
paddingLeft:'20px',
backgroundColor: 'black',
color: 'white',
'& .footer-container': {
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
padding: theme.spacing(2),
backgroundColor: 'black',
[theme.breakpoints.down('sm')]: {
flexDirection: 'column'
}
},
'& .footer-section': {
[theme.breakpoints.down('sm')]: {
marginBottom: theme.spacing(2)
},
backgroundColor: 'black',
color: 'white',
},
'& .footer-section-title': {
marginBottom: theme.spacing(1),
fontWeight: 'bold',
color: 'white',
},
'& .footer-section-list': {
listStyle: 'none',
margin: 0,
padding: 0,
'& a': {
color: 'white',
textDecoration: 'none',
'&:hover': {
color: theme.palette.primary.main
}
}
},
'& .social-icons': {
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
color: 'white',
'& .icon-button': {
margin: theme.spacing(0, 2),
color: 'white',
}
},
'& .copyright': {
textAlign: 'center',
marginTop: theme.spacing(2),
color: 'white'
}

}
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <div className="footer-container">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <div className="footer-section">
              <h3 className="footer-section-title">Resources</h3>
              <ul className="footer-section-list">
                <li><a href="#">Blog</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Documentation</a></li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="footer-section">
              <h3 className="footer-section-title">Company</h3>
              <ul className="footer-section-list">
                <li><a href="#">About Us</a></li>
    <li><a href="#">Careers</a></li>
    <li><a href="#">Contact Us</a></li>
    </ul>
    </div>
    </Grid>
    <Grid item xs={12} sm={4}>
    <div className="footer-section">
        <h3 className="footer-section-title">Support</h3>
        <ul className="footer-section-list">
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Terms of Service</a></li>
        </ul>
    </div>
    </Grid>
    </Grid>
    <div className="social-icons">
        <IconButton className="icon-button" href="#">
        <FacebookIcon fontSize="small" />
        </IconButton>
        <IconButton className="icon-button" href="#">
        <TwitterIcon fontSize="small" />
        </IconButton>
        <IconButton className="icon-button" href="#">
        <LinkedInIcon fontSize="small" />
        </IconButton>
        <IconButton className="icon-button" href="#">
        <InstagramIcon fontSize="small" />
        </IconButton>
    </div>
    </div>
    <p className="copyright">
    © {new Date().getFullYear()} Collaboration. All rights reserved.
    </p>
    </footer>
    );
    };

    export default Footer;