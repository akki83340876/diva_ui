import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, TextField, Button, Link, Checkbox, InputLabel } from '@mui/material';
import axios from 'axios';
import api_URL from '../apiUrl';

const RegisterPage = () => {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
        newsletter: false,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(api_URL + 'register', formData);

            // Handle the API response here
            console.log('Registration successful', response.data);
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: newValue,
        }));
    };

    return (
        <div id="page-content">
            <div className="page section-header text-center mb-0">
                <hr />
                <div className="page-title">
                    <div className="wrapper"><h1 className="page-width">Register</h1></div>
                </div>
                <hr />
            </div>
            <div className="bredcrumbWrap bredcrumbWrapPage bredcrumb-style2 text-center">
                <div className="container breadcrumbs">
                    <Link href="/" color="inherit" title="Back to the home page" style={{ textDecoration: 'none' }}>Home</Link><span aria-hidden="true">|</span><span className="title-bold">Register</span>
                </div>
                <hr />
            </div>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <div className="mb-4">
                                <Typography variant="h5">Personal Information</Typography>
                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <InputLabel>First Name*</InputLabel><br/>
                                            <TextField
                                                fullWidth
                                                label="First Name"
                                                name="first_name"
                                                value={formData.first_name}
                                                onChange={handleChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <InputLabel>Last Name*</InputLabel><br/>
                                            <TextField
                                                fullWidth
                                                label="Last Name"
                                                name="last_name"
                                                value={formData.last_name}
                                                onChange={handleChange}
                                            />
                                        </Grid>
                                    </Grid>
                                    <InputLabel>Email Address*</InputLabel>
                                    <br/>
                                    <TextField
                                        fullWidth
                                        label="Email Address"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange} />
                                    <div className="form-group">
                                        <Checkbox id="newsletter" name="newsletter" />
                                        <label htmlFor="newsletter">Sign Up for Newsletter</label>
                                    </div>
                                    <Typography variant="h5" className="mt-3">Login Information</Typography>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}><br/>
                                            <TextField
                                                fullWidth
                                                type="password"
                                                label="Password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} sm={6}><br/>
                                            <TextField
                                                fullWidth
                                                type="password"
                                                label="Confirm Password"
                                                name="confirm_password"
                                                value={formData.confirm_password}
                                                onChange={handleChange} />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3}>
                                        <Grid item xs={6}>
                                            <Button type="submit" variant="contained" color="warning" sx={{ mt: 2 }}>
                                                Submit
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6} sx={{ textAlign: 'right' }}>
                                            <Link href="/loginpage" color="inherit" style={{ textDecoration: 'none' }}>
                                                <i className="icon an an-angle-double-left me-1"></i>« Back To Login
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </form>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default RegisterPage