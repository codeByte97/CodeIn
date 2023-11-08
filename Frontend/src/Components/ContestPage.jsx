import React, { useState } from 'react';
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import ResponsiveAppBar from './Navbar';
import { styled } from '@mui/system';

const StyledTableHead = styled(TableHead)(({ theme }) => ({
    background: theme.palette.primary.light,
}));

const contests = [
    {
        id: 1,
        name: 'Contest 1',
        startTime: new Date(2023, 11, 15, 10, 0),
        endTime: new Date(2023, 11, 15, 12, 0),
        status: 'upcoming',
    },
    {
        id: 2,
        name: 'Contest 2',
        startTime: new Date(2023, 11, 10, 14, 0),
        endTime: new Date(2023, 11, 10, 16, 0),
        status: 'completed',
    },
    {
        id: 3,
        name: 'Contest 3',
        startTime: new Date(2023, 11, 12, 9, 0),
        endTime: new Date(2023, 11, 12, 11, 0),
        status: 'ongoing',
    },
    // Add more contests as needed
];

const ContestPage = () => {
    const upcomingContests = contests.filter((contest) => contest.status === 'upcoming');
    const ongoingContests = contests.filter((contest) => contest.status === 'ongoing');
    const completedContests = contests.filter((contest) => contest.status === 'completed');
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <>
            <ResponsiveAppBar />
            <Container style={{marginTop:'3rem'}} maxWidth="lg" >
                <Typography variant="h5" gutterBottom>
                    Upcoming Contests
                </Typography>
                <Paper>
                    {upcomingContests.length > 0 ? (
                        <>
                            <TableContainer component={Paper}>
                                <Table>
                                    <StyledTableHead>
                                        <TableRow >
                                            <TableCell>
                                                <Typography color={'white'} variant="h6" gutterBottom>
                                                    Contest Name
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography color={'white'} variant="h6" gutterBottom>
                                                    Start Time
                                                </Typography>
                                            </TableCell>
                                            <TableCell> <Typography color={'white'} variant="h6" gutterBottom>
                                                End Time
                                            </Typography></TableCell>
                                        </TableRow>
                                    </StyledTableHead>
                                    <TableBody>
                                        {upcomingContests.map((contest) => (
                                            <TableRow key={contest.id}>
                                                <TableCell>{contest.name}</TableCell>
                                                <TableCell>{contest.startTime.toLocaleString()}</TableCell>
                                                <TableCell>{contest.endTime.toLocaleString()}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </>
                    ) : (
                        <Typography variant="body1" align="center">
                            No upcoming contests available.
                        </Typography>
                    )}
                </Paper>
                <Typography margin={1} variant="h5" gutterBottom>
                    Ongoing Contests
                </Typography>
                <Paper style={{ marginTop: '20px' }}>
                    {ongoingContests.length > 0 ? (
                        <>
                            <TableContainer component={Paper}>
                                <Table>
                                    <StyledTableHead>
                                        <TableRow >
                                            <TableCell>
                                                <Typography color={'white'} variant="h6" gutterBottom>
                                                    Contest Name
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography color={'white'} variant="h6" gutterBottom>
                                                    Start Time
                                                </Typography>
                                            </TableCell>
                                            <TableCell> <Typography color={'white'} variant="h6" gutterBottom>
                                                End Time
                                            </Typography></TableCell>
                                        </TableRow>
                                    </StyledTableHead>
                                    <TableBody>
                                        {ongoingContests.map((contest) => (
                                            <TableRow key={contest.id}>
                                                <TableCell>{contest.name}</TableCell>
                                                <TableCell>{contest.startTime.toLocaleString()}</TableCell>
                                                <TableCell>{contest.endTime.toLocaleString()}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </>
                    ) : (
                        <Typography variant="body1" align="center">
                            No ongoing contests available.
                        </Typography>
                    )}
                </Paper>

                <Typography margin={1} variant="h5" gutterBottom>
                    Completed Contests
                </Typography>
                <Paper style={{ marginTop: '20px' }}>
                    {completedContests.length > 0 ? (
                        <>
                            <TableContainer component={Paper}>
                                <Table>
                                    <StyledTableHead>
                                        <TableRow >
                                            <TableCell>
                                                <Typography color={'white'} variant="h6" gutterBottom>
                                                    Contest Name
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography color={'white'} variant="h6" gutterBottom>
                                                    Start Time
                                                </Typography>
                                            </TableCell>
                                            <TableCell> <Typography color={'white'} variant="h6" gutterBottom>
                                                End Time
                                            </Typography></TableCell>
                                        </TableRow>
                                    </StyledTableHead>
                                    <TableBody>
                                        {completedContests.map((contest) => (
                                            <TableRow key={contest.id}>
                                                <TableCell>{contest.name}</TableCell>
                                                <TableCell>{contest.startTime.toLocaleString()}</TableCell>
                                                <TableCell>{contest.endTime.toLocaleString()}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </>
                    ) : (
                        <Typography variant="body1" align="center">
                            No completed contests available.
                        </Typography>
                    )}
                </Paper>
            </Container>
        </>
    );
};

export default ContestPage;
