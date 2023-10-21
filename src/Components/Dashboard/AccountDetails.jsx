import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Typography,
  FormControlLabel,
  Checkbox,
  TextField,
  Button,
  Grid,
  Radio,
  RadioGroup,
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  formGroup: {
    marginBottom: theme.spacing(3),
  },
}));

const AccountDetails = () => {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="tab-pane fade" id="account-details">
      <Typography variant="h3" gutterBottom>
        Account details
      </Typography>
      <div className={classes.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <Typography variant="subtitle1">Title</Typography>
            <RadioGroup row name="title" defaultValue="1">
              <FormControlLabel value="1" control={<Radio />} label="Mr." />
              <FormControlLabel value="0" control={<Radio />} label="Mrs." />
            </RadioGroup>
          </div>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField label="First Name" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Last Name" fullWidth />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField label="E-Mail" fullWidth type="email" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Password" fullWidth type="password" />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField label="Telephone" fullWidth type="tel" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Birthdate"
                fullWidth
                type="date"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
          <div className={classes.formGroup}>
            <FormControlLabel
              control={<Checkbox name="offers" />}
              label="Receive offers from our partners"
            />
            <FormControlLabel
              control={<Checkbox name="newsletter" />}
              label="Sign up for our newsletter"
            />
            <Typography variant="body2" color="textSecondary">
              You may unsubscribe at any moment. For that purpose, please find
              our contact info in the legal notice.
            </Typography>
          </div>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AccountDetails;
