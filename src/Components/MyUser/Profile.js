import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserContext from '../context/Users/UserContext';
import { useContext } from 'react';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


export default function Profile() {

    const context = useContext(UserContext);
    let { Acuserinfo } = context;




    return (
        <Container maxwidth="md" sx={{ height: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

            <div className='text-4xl mb-[75px] font-semibold  '>Your Profile</div>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontSize: 25, textAlign: 'center' }}>Attribute</TableCell>
                            <TableCell align="right" sx={{ fontSize: 25, textAlign: 'center' }}>Values</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx={{ fontSize: 20, textAlign: 'center' }}>
                                Name
                            </TableCell>
                            <TableCell align="right" sx={{ fontSize: 20, textAlign: 'center' }}>{Acuserinfo.name}</TableCell>
                        </TableRow>

                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx={{ fontSize: 20, textAlign: 'center' }}>
                                Email
                            </TableCell>
                            <TableCell align="right" sx={{ fontSize: 20, textAlign: 'center' }}>{Acuserinfo.email}</TableCell>
                        </TableRow>

                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx={{ fontSize: 20, textAlign: 'center' }}>
                                Mobile Number
                            </TableCell>
                            <TableCell align="right" sx={{ fontSize: 20, textAlign: 'center' }}>{Acuserinfo.mobile}</TableCell>
                        </TableRow>

                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx={{ fontSize: 20, textAlign: 'center' }}>
                                Address
                            </TableCell>
                            <TableCell align="right" sx={{ fontSize: 20, textAlign: 'center' }}>{Acuserinfo.adress}</TableCell>
                        </TableRow>


                    </TableBody>
                </Table>
            </TableContainer>

            <div className="my-8">
                <Link to='/'>
                    <Button color="secondary" variant="contained">Back to Home</Button>
                </Link>
            </div>



        </Container>
    );
}
