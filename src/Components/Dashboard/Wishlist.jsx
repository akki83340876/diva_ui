import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  cardMedia: {
    paddingTop: '100%', // 1:1 aspect ratio
  },
  cardContent: {
    flexGrow: 1,
  },
  closeButton: {
    marginLeft: 'auto',
  },
}));

const Wishlist = () => {
  const classes = useStyles();

  const handleRemoveItem = (productId) => {
    // Handle remove item logic here
  };

  return (
    <div className="tab-pane fade" id="wishlist">
      <Typography variant="h3" gutterBottom>
        My Wishlist
      </Typography>
      <div className="grid-products grid--view-items wishlist-grid mt-4">
        <Grid container spacing={3}>
          {/* Replace this loop with data from your API */}
          {[1, 2, 3, 4].map((item) => (
            <Grid item key={item} xs={12} sm={6} md={4} lg={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={`assets/images/product-images/product-image${item}.jpg`}
                  title="Product"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" component="h2">
                    Product Name
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    $600.00
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton
                    className={classes.closeButton}
                    onClick={() => handleRemoveItem(item)}
                  >
                    <CloseIcon />
                  </IconButton>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    href="cart.html"
                  >
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Wishlist;
