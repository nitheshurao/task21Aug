import React, { useState } from 'react';
import { API_URL } from '../config';
import axios from 'axios'
import { Box, Button, Grid, Link, Paper, Stack, styled, TextField, Typography } from '@mui/material';
// import { API_URL } from './config.js';
const StyledButton = styled(Button)(({ theme }) => ({

    borderRadius: '5px',
}))

const TransparentButton = styled(Button)(({ theme }) => ({
    borderRadius: '5px',
}))

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLogin, setIsLogin] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("----", API_URL)
        try {
            //         "username": "testuser",
            // "password": "testpassword"
            console.log("----1", API_URL)
            const response = await axios.post(`http://localhost:8000/api/auth/${isLogin ? "login" : "register"}`,
                {
                    "username": username,
                    "password": password
                }
            );

            const data = await response.json();
            console.log("----2", data)
            // if (data.token) {
            //     localStorage.setItem('token', data.token);
            //     window.location.href = '/home';
            // } else {
            //     setError('Invalid username or password');
            // }
        } catch (error) {
            setError(`Error in ${isLogin ? "login" : "register"}`);
        }
    };

    return (
        <div>

            <Grid
                sx={{
                    background: `url('/bg3.avif') no-repeat`,
                    backgroundSize: 'cover',
                    width: '100%',
                }}
            > {error && <div style={{ color: 'red' }}>{error}</div>}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '100vh',
                    }}
                >
                    <Stack direction={'row'} height={'85%'} width={'85%'} spacing={0.5}>
                        <Box>
                            <img
                                src="/images/login_image.jpg"
                                alt="LoginPage Logo"
                                style={{ height: '100%', width: '100%' }}
                            />
                        </Box>
                        <Box
                            sx={{
                                height: '100%',
                                width: '100%',
                                direction: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                m: 10,
                            }}
                        >
                            <Paper sx={{ padding: "10px" }}>
                                <StyledButton sx={{ backgroundColor: `${!isLogin ? '' : '#F3C418'}` }} onClick={() => { setIsLogin(true) }}>Login</StyledButton>
                                <TransparentButton sx={{ backgroundColor: `${isLogin ? '' : '#F3C418'}` }} onClick={() => { setIsLogin(false) }}>Register</TransparentButton>
                                <Typography fontWeight={'bold'} fontSize={'24px'}>
                                    Welcome
                                </Typography>
                                <Typography>Please {isLogin ? "login" : "Register"} to your account</Typography>
                                <Box>
                                    <TextField
                                        id="user-name"
                                        label="Username or Email"
                                        variant="standard" onChange={(e) => setUsername(e.target.value)}
                                    />
                                </Box>
                                <TextField id="pass-word" label="Password" variant="standard"
                                    onChange={(e) => setPassword(e.target.value)} />
                                <Stack direction={'row'}>
                                    <Link component="button" variant="body2">
                                        Forgot password
                                    </Link>
                                    <StyledButton onClick={(e) => {
                                        handleSubmit(e)
                                    }}>Ok</StyledButton>
                                </Stack>
                                <TransparentButton>
                                    Register your school in our apps
                                </TransparentButton>
                                <Typography>Terms and conditions & Privacy policy</Typography>
                            </Paper>
                        </Box>
                    </Stack>
                </Box>
            </Grid>
        </div>
    );
};

export default Login;
