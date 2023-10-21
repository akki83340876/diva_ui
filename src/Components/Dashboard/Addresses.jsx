import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Typography,
  Grid,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles((theme) => ({
  accordion: {
    marginBottom: theme.spacing(3),
  },
}));

const Addresses = () => {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="address tab-pane" id="address">
      <Typography variant="h3" gutterBottom>
        Addresses
      </Typography>
      <Typography variant="body2" className="xs-fon-13 margin-10px-bottom">
        The following addresses will be used on the checkout page by default.
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Accordion className={classes.accordion}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h4" className="billing-address">
                Shipping address
              </Typography>
              <Link href="#" className="view">
                Edit
              </Link>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                No 40 Baria Street <br /> 133/2 New York City, <br /> NY, United States.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Accordion className={classes.accordion}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h4" className="billing-address">
                Billing address
              </Typography>
              <Link href="#" className="view">
                Edit
              </Link>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                No 40 Baria Street <br /> 133/2 New York City, <br /> NY, United States.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Accordion className={classes.accordion}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h4" className="billing-address">
                Add Shipping Address
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <form onSubmit={handleSubmit}>
                {/* Form fields for adding shipping address */}
                <TextField label="First Name" fullWidth />
                <TextField label="Last Name" fullWidth />
                <TextField label="E-Mail" fullWidth />
                <TextField label="Telephone" fullWidth />
                <TextField label="Company" fullWidth />
                <TextField label="Address" fullWidth />
                <TextField label="Apartment" fullWidth />
                <TextField label="City" fullWidth />
                <TextField label="Post Code" fullWidth />
                <FormControl fullWidth>
                  <InputLabel>Country</InputLabel>
                  <Select value="" label="Country">
                    <MenuItem value="">Please Select</MenuItem>
                    {/* Other country options */}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel>Region / State</InputLabel>
                  <Select value="" label="Region / State">
                    <MenuItem value="">Please Select</MenuItem>
                    {/* Other region/state options */}
                  </Select>
                </FormControl>
                <Button type="submit" variant="contained" color="primary" mt={1}>
                  Add Address
                </Button>
              </form>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Accordion className={classes.accordion}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h4" className="billing-address">
                Add Billing Address
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <form onSubmit={handleSubmit}>
                {/* Form fields for adding billing address */}
                {/* Similar to the shipping address form */}
              </form>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </div>
  );
};

export default Addresses;
