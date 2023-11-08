import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Container, TextField, Button, Typography, Link, CircularProgress, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
    const theme = useTheme();

    // Define state variables to store form input values
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [codechefUsername, setCodeChefUsername] = React.useState('');
    const [codeforcesUsername, setCodeForcesUsername] = React.useState('');
    const [leetcodeUsername, setLeetCodeUsername] = React.useState('');
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({
        severity: '',
        message: '',
    });
    const Navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleCodeChefUsernameChange = (event) => {
        setCodeChefUsername(event.target.value);
    };

    const handleCodeForcesUsernameChange = (event) => {
        setCodeForcesUsername(event.target.value);
    };

    const handleLeetCodeUsernameChange = (event) => {
        setLeetCodeUsername(event.target.value);
    };

    const handleSignup = async () => {
        const Data = {
            Email: email,
            password: password,
            codechef: codechefUsername,
            codeforces: codeforcesUsername,
            leetcode: leetcodeUsername
        }
        setLoading(true); // Set loading state to true

        try {
            const res = await axios.post('/SignUP', Data);
            if (res.data.status === 200) {
                Navigate('/Login');
                setAlert({
                    severity: 'success',
                    message: res.data.message,
                });
            } else {
                console.log('error');
                setAlert({
                    severity: 'error',
                    message: res.data.message,
                });
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false); // Set loading state to false after response is received or in case of an error
        }
    };

    return (
        <>
            <Alert severity={alert.severity} >{alert.message}</Alert>
            <Container maxWidth="sm">
                <Box
                    sx={{
                        bgcolor: 'white',
                        marginTop: '7rem',
                        padding: '2rem',
                        borderRadius: '8px',
                        boxShadow: `0 0 10px ${theme.palette.primary.main}`,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        Sign Up
                    </Typography>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <TextField
                        label="Confirm Password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%',
                        }}
                    >
                        <TextField
                            label="CodeChef Username"
                            variant="outlined"
                            margin="normal"
                            style={{ marginRight: '1rem' }}
                            value={codechefUsername}
                            onChange={handleCodeChefUsernameChange}
                        />
                        <TextField
                            label="CodeForces Username"
                            variant="outlined"
                            margin="normal"
                            style={{ marginRight: '1rem' }}
                            value={codeforcesUsername}
                            onChange={handleCodeForcesUsernameChange}
                        />
                        <TextField
                            label="LeetCode Username"
                            variant="outlined"
                            margin="normal"
                            value={leetcodeUsername}
                            onChange={handleLeetCodeUsernameChange}
                        />
                    </Box>
                    {loading ? ( // Render a spinner while loading is true
                        <CircularProgress color="primary" />
                    ) : (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSignup}
                            style={{ marginTop: '1rem' }}
                        >
                            Sign Up
                        </Button>
                    )}
                    <Typography variant="body2" style={{ marginTop: '1rem' }}>
                        Already have an account? <Link href="/Login">Login</Link>
                    </Typography>
                </Box>
            </Container>
        </>
    );
}

export default SignupPage;
