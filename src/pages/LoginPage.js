import React, {useState } from 'react';
import { Container, Grid, Paper, Typography, TextField, Button, Link, InputLabel } from '@mui/material';
import Axios from 'axios';
import api_URL from '../apiUrl';

const LoginPage = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Axios.post( api_URL + 'user-login' , formData);

            console.log('Login successful', response.data);
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div style={{padding:'50px'}}>
            <div className="page section-header text-center mb-0">
                <div className="page-title">
                    <div style={{border:'2px', borderColor:'red'}}><h4 className="page-width">Login</h4></div>
                </div>
                <hr/>
            </div>
            <div className="bredcrumbWrap bredcrumbWrapPage bredcrumb-style2 text-center">
                <div className="container breadcrumbs">
                    <Link href="/" color="inherit" title="Back to the home page" style={{ textDecoration: 'none' }}>Home</Link><span aria-hidden="true">|</span><span className="title-bold">Login</span>
                </div>
                <hr />
            </div>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <Typography variant="h5" gutterBottom>New Customers</Typography>
                            <Typography paragraph>
                                By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.
                            </Typography>
                            <Button variant="contained" to="/registerpage" color="warning">
                                Create an account
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <form onSubmit={handleSubmit}>
                                <Typography variant="h5" gutterBottom>Registered Customers</Typography>
                                <Typography paragraph>If you have an account with us, please log in.</Typography>
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                        <InputLabel>Email*</InputLabel><br/>
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            autoFocus />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                        <InputLabel>Password*</InputLabel><br/>
                                        <TextField
                                            fullWidth
                                            label="Password"
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="text-left col-12 col-sm-12 col-md-12 col-lg-12">
                                        <Button type="submit" variant="contained" color="warning" sx={{ mt: 2 }}>
                                            Sign In
                                        </Button>
                                        <Typography variant="body2" sx={{ mt: 2 }}>
                                            <Link to="/forgotpasswordpage" color="inherit" style={{ textDecoration: 'none' }}>Forgot your password?</Link> &nbsp; | &nbsp;
                                            <Link to="/registerpage" color="inherit" style={{ textDecoration: 'none' }}>Create account</Link>
                                        </Typography>
                                    </div>
                                </div>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default LoginPage;
