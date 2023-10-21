import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Tab,
  Tabs,
  Typography,
  Link,
  Box,
  Grid,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
  dashboard: {
    padding: theme.spacing(3),
  },
  profileImg: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
  },
  profileAvatar: {
    width: 65,
    height: 65,
    marginRight: theme.spacing(2),
  },
  profileDetail: {
    display: 'flex',
    flexDirection: 'column',
  },
  lbl: {
    color: theme.palette.text.secondary,
  },
  orderList: {
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(3),
    },
  },
  orderListItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  orderCount: {
    marginRight: theme.spacing(2),
  },
  tableContainer: {
    marginTop: theme.spacing(4),
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.dashboard}>
      <Typography variant="h3" gutterBottom>
        Dashboard
      </Typography>
      <Typography paragraph>
        From your account dashboard, you can easily check & view your{' '}
        <Link href="#" underline="always">
          recent orders
        </Link>
        , manage your{' '}
        <Link href="#" underline="always">
          shipping and billing addresses
        </Link>
        , and{' '}
        <Link href="#" underline="always">
          edit your password and account details
        </Link>
        .
      </Typography>
      <Grid container className={classes.profileImg}>
        <Avatar
          alt="profile"
          src="assets/images/profile.jpg"
          className={classes.profileAvatar}
        />
        <div className={classes.profileDetail}>
          <Typography variant="h5" gutterBottom>
            Diva joy
          </Typography>
          <Typography paragraph>
            Balance: <strong>$500</strong>
          </Typography>
          <Typography variant="body2" className={classes.lbl}>
            SILVER USER
          </Typography>
        </div>
      </Grid>
      <Grid container className={classes.orderList}>
        <Grid item xs={12} lg={6}>
          <List>
            <ListItem className={classes.orderListItem}>
              <Typography variant="h3" className={classes.orderCount}>
                16
              </Typography>
              <ListItemText primary="All Orders" />
            </ListItem>
            <ListItem className={classes.orderListItem}>
              <Typography variant="h3" className={classes.orderCount}>
                02
              </Typography>
              <ListItemText primary="Awaiting Payments" />
            </ListItem>
            <ListItem className={classes.orderListItem}>
              <Typography variant="h3" className={classes.orderCount}>
                00
              </Typography>
              <ListItemText primary="Awaiting Shipment" />
            </ListItem>
            <ListItem className={classes.orderListItem}>
              <Typography variant="h3" className={classes.orderCount}>
                01
              </Typography>
              <ListItemText primary="Awaiting Delivery" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Minerva Dress black</TableCell>
              <TableCell>March 04, 2018</TableCell>
              <TableCell>Completed</TableCell>
              <TableCell>$165.00 for 1 item</TableCell>
              <TableCell>
                <Link href="cart.html" className="view">
                  View
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
