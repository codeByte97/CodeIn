import React, { useState } from 'react';
import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    Avatar,
    CircularProgress,
    IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import ResponsiveAppBar from './Navbar';

const ProfilePage = () => {
    const [profilePic, setProfilePic] = useState('/path-to-default-profile-pic.jpg');
    const [username, setUsername] = useState('Username');
    const [email, setEmail] = useState('user@example.com');
    const [loading, setLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleImageChange = (event) => {
        setLoading(true);
        // Simulate image upload, you can replace this with your own logic
        setTimeout(() => {
            setProfilePic(URL.createObjectURL(event.target.files[0]));
            setLoading(false);
        }, 2000);
    };

    const handleUpdateProfile = () => {
        setLoading(true);
        // Simulate update profile data, you can replace this with your own logic
        setTimeout(() => {
            // Update username, email, or any other data here
            setUsername('New Username');
            setLoading(false);
            setIsEditing(false);
        }, 2000);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
    };

    return (
        <>
            <ResponsiveAppBar />
            <Typography variant='h3' align='center' margin={1} >
                <strong> Profile</strong>
            </Typography>
            <Container maxWidth="xl" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Paper elevation={3} style={{ width: '400px', padding: '20px', textAlign: 'center' }}>
                    <Avatar alt="User Profile" src={profilePic} style={{ width: '100px', height: '100px', margin: '0 auto' }} />
                    <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} id="profilePicInput" />
                    <label htmlFor="profilePicInput">
                        <IconButton variant="contained" component="span" color="primary">
                            <EditIcon />
                        </IconButton>
                    </label>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        disabled
                        value={email}
                        style={{ marginBottom: '20px' }}
                    />
                    <TextField
                        label="User Name"
                        variant="outlined"
                        fullWidth
                        disabled
                        value={email}
                        style={{ marginBottom: '20px' }}
                    />
                    {loading ? <CircularProgress style={{ marginTop: '20px' }} /> : <Button color="primary" onClick={handleEditClick}>
                        Update Profile
                    </Button>
                    }
                </Paper>
            </Container>
        </>
    );
};

export default ProfilePage;
