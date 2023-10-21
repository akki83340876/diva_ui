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

const Downloads = () => {
  const classes = useStyles();

  const downloadsData = [
    {
      product: 'Minerva Dress black',
      remaining: 'July 22, 2018',
      expires: 'never',
    },
    {
      product: 'Sueded Cotton Pant in Khaki',
      remaining: 'Dec 17, 2018',
      expires: 'never',
    },
    {
      product: 'Standard chunk since',
      remaining: 'June 24, 2018',
      expires: 'never',
    },
    {
      product: 'Combined with a handful',
      remaining: 'July 28, 2018',
      expires: 'never',
    },
  ];

  return (
    <div className="product-order tab-pane fade" id="downloads">
      <Typography variant="h3" gutterBottom>
        Downloads
      </Typography>
      <TableContainer className={classes.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Downloads remaining</TableCell>
              <TableCell>Expires</TableCell>
              <TableCell>Download</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {downloadsData.map((download, index) => (
              <TableRow key={index}>
                <TableCell>{download.product}</TableCell>
                <TableCell>{download.remaining}</TableCell>
                <TableCell>{download.expires}</TableCell>
                <TableCell>
                  <Link href="#" className="view">
                    Click Here To Download Your File
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

export default Downloads;
