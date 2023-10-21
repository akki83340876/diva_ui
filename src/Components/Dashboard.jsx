import React from 'react';
import { Typography, Container, Grid, Link, IconButton, Divider } from '@mui/material';
import { ShoppingBag  } from '@mui/icons-material';

const Dashboard = () => {
  return (
    <div>
      <Container id="page-content">
        <div className="page section-header text-center mb-0">
          <div className="page-title">
            <div className="wrapper">
              <Typography variant="h4" className="page-width">
                My Account
              </Typography>
              <hr/>
            </div>
          </div>
        </div>
        <div className="bredcrumbWrap bredcrumbWrapPage bredcrumb-style2 text-center">
          <Container className="breadcrumbs">
            <Link href="/" color="inherit" underline="hover" title="Back to the home page" style={{textDecoration:'none'}}>
              Home
            </Link>
            <span aria-hidden="true">|</span>
            <span className="title-bold">My Account</span><hr/>
          </Container>
        </div>
        <Container>
          <div className="dashboard-upper-info">
            <Grid container alignItems="center">
              <Grid item xs={12} sm={6} md={3} xl={3} lg={3}>
                <div className="d-single-info">
                  <Typography className="user-name">
                    Hello <span className="font-weight-600">yourmail@info</span>
                  </Typography>
                  <Typography>
                    (not yourmail@info?{' '}
                    <Link href="login.html" className="font-weight-600">
                      Log Out
                    </Link>
                    )
                  </Typography>
                </div>
              </Grid>
              <Divider />
              <Grid item xs={12} sm={6} md={4} xl={4} lg={4}>
                <div className="d-single-info">
                  <Typography>Need Assistance? Customer service at.</Typography>
                  <Typography>admin@yoursite.com.</Typography>
                </div>
              </Grid>
              <Divider />
              <Grid item xs={12} sm={6} md={3} xl={3} lg={3}>
                <div className="d-single-info">
                  <Typography>E-mail them at</Typography>
                  <Typography>support@yoursite.com</Typography>
                </div>
              </Grid>
              <Divider />
              <Grid item xs={12} sm={6} md={2} xl={2} lg={2}>
                <div className="d-single-info text-lg-center">
                  <Link className="view-cart" href="/cart" color="inherit" style={{textDecoration:'none'}}>
                    <IconButton color="primary">
                      <ShoppingBag />
                    </IconButton>
                    View Cart
                  </Link>
                </div>
              </Grid>
            </Grid>
          </div>
          <Grid container spacing={3} className="mb-4 mb-lg-5 pb-lg-5">
            <Grid item xs={12} md={2} xl={2} lg={2} className="md-margin-20px-bottom">
              <ul className="nav flex-column dashboard-list mb-4 mb-lg-0" role="tablist">
                <li>
                  <Link color="inherit" style={{textDecoration:'none'}} className="nav-link active" data-bs-toggle="tab" href="#dashboard">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link color="inherit" style={{textDecoration:'none'}} className="nav-link" data-bs-toggle="tab" href="#orders">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link color="inherit" style={{textDecoration:'none'}} className="nav-link" data-bs-toggle="tab" href="#downloads">
                    Downloads
                  </Link>
                </li>
                <li>
                  <Link color="inherit" style={{textDecoration:'none'}} className="nav-link" data-bs-toggle="tab" href="#address">
                    Addresses
                  </Link>
                </li>
                <li>
                  <Link color="inherit" style={{textDecoration:'none'}} className="nav-link" data-bs-toggle="tab" href="#account-details">
                    Account details
                  </Link>
                </li>
                <li>
                  <Link color="inherit" style={{textDecoration:'none'}} className="nav-link" data-bs-toggle="tab" href="#wishlist">
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link color="inherit" style={{textDecoration:'none'}} className="nav-link" href="login.html">
                    Logout
                  </Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default Dashboard;
