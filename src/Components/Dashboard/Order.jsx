import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Link,
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    marginTop: theme.spacing(4),
  },
}));

const Orders = () => {
  const classes = useStyles();

  const ordersData = [
    {
      order: 1,
      product: 'Minerva Dress black',
      date: 'March 04, 2018',
      status: 'Completed',
      total: '$165.00 for 1 item',
    },
    {
      order: 2,
      product: 'Sueded Cotton Pant in Khaki',
      date: 'May 19, 2018',
      status: 'Completed',
      total: '$150.00 for 1 item',
    },
    {
      order: 3,
      product: 'Standard chunk since',
      date: 'June 24, 2018',
      status: 'Processing',
      total: '$190.00 for 2 items',
    },
    {
      order: 4,
      product: 'Combined with a handful',
      date: 'July 28, 2018',
      status: 'Processing',
      total: '$170.00 for 1 item',
    },
  ];

  return (
    <div className="product-order tab-pane fade" id="orders">
      <Typography variant="h3" gutterBottom>
        Orders
      </Typography>
      <TableContainer className={classes.tableContainer}>
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
            {ordersData.map((order) => (
              <TableRow key={order.order}>
                <TableCell>{order.order}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>
                  <Link href="cart.html" className="view">
                    View
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Orders;
