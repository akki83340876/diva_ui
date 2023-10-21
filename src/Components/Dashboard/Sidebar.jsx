import React from 'react';
import { Typography, Container, Grid, Link, IconButton } from '@mui/material';
import { Logout, ShoppingBag } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div>
        <Grid container spacing={3} className="mb-4 mb-lg-5 pb-lg-5">
            <Grid item xs={12} md={2} xl={2} lg={2} className="md-margin-20px-bottom">
              <ul className="nav flex-column dashboard-list mb-4 mb-lg-0" role="tablist">
                <li>
                  <Link className="nav-link active" data-bs-toggle="tab" href="#dashboard">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" data-bs-toggle="tab" href="#orders">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" data-bs-toggle="tab" href="#downloads">
                    Downloads
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" data-bs-toggle="tab" href="#address">
                    Addresses
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" data-bs-toggle="tab" href="#account-details">
                    Account details
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" data-bs-toggle="tab" href="#wishlist">
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="login.html">
                    Logout
                  </Link>
                </li>
              </ul>
            </Grid>
          </Grid>
    </div>
  )
}

export default Sidebar