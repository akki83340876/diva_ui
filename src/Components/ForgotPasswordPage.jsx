import React from 'react';
import { Container, Grid, Paper, Typography, TextField, Button, Link } from '@mui/material';

const ForgotPasswordPage = () => {

    const hadleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div id="page-content">
            <div className="page section-header text-center mb-0">
                <hr/>
                <div className="page-title">
                    <div className="wrapper"><h1 className="page-width">Forgot Your Password</h1></div>
                </div>
                <hr/>
            </div>
            <div className="bredcrumbWrap bredcrumbWrapPage bredcrumb-style2 text-center">
                <div className="container breadcrumbs">
                    <Link to="/" color="inherit" title="Back to the home page" style={{textDecoration:'none'}}>Home</Link><span aria-hidden="true">|</span><span className="title-bold">Forgot Your Password</span>
                </div>
                <hr/>
            </div>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <div className="mb-4">
                                <form onSubmit={hadleSubmit}>
                                    <Typography variant="h5">Retrieve your password here</Typography>
                                    <Typography paragraph>
                                        Please enter your email address below. You will receive a link to reset your password.
                                    </Typography>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <TextField fullWidth label="Email Address" name="customer[email]" />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <Button type="submit" variant="contained" color="warning" sx={{ mt: 2 }}>
                                                Submit
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography paragraph>
                                                <Link href="/loginpage" color="inherit" style={{textDecoration:'none'}}>« Back To Login Page</Link>
                                            </Typography>
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

export default ForgotPasswordPage;
