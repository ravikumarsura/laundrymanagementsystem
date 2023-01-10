import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserContext from '../context/Users/UserContext';
import { useContext, useEffect } from 'react';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const MyOrders = () => {


    const context = useContext(UserContext);
    let { setprogress, userorders, setUserorders } = context;


    async function fetchUserOrders() {
        const response = await fetch(`http://127.0.0.1:8000/api/user/order/?userid=${localStorage.getItem('userid')}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const json = await response.json();

        setUserorders(json);
    }


    useEffect(() => {

        setprogress(50)
        setTimeout(() => {
            setprogress(65)
        }, 500);
        setTimeout(() => {
            setprogress(100)
        }, 700);
        fetchUserOrders();



        setprogress(50)
        setTimeout(() => {
            setprogress(65)
        }, 500);
        setTimeout(() => {
            setprogress(100)
        }, 700);

        /* loading bar ends*/

        console.log('userorders =', userorders);
    }, [])


    return (
        <div>

            <Container maxwidth="md" sx={{ height: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

                <div className='text-4xl mb-[65px] font-semibold'>Your Orders</div>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontSize: 25, textAlign: 'center' }}>OrderId</TableCell>
                                <TableCell sx={{ fontSize: 25, textAlign: 'center' }}>Clothtype</TableCell>
                                <TableCell align="right" sx={{ fontSize: 25, textAlign: 'center' }}>WashingType</TableCell>
                                <TableCell align="right" sx={{ fontSize: 25, textAlign: 'center' }}>Quantity</TableCell>
                                <TableCell align="right" sx={{ fontSize: 25, textAlign: 'center' }}>Order Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {
                                userorders.map((e, index) => {
                                    return <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={index}
                                    >
                                        <TableCell component="th" scope="row" sx={{ fontSize: 20, textAlign: 'center' }}>
                                            {e.id}
                                        </TableCell>
                                        <TableCell align="right" sx={{ fontSize: 20, textAlign: 'center' }}>{e.Clothtype}</TableCell>

                                        <TableCell align="right" sx={{ fontSize: 20, textAlign: 'center' }}>{e.WashingType}</TableCell>

                                        <TableCell align="right" sx={{ fontSize: 20, textAlign: 'center' }}>{e.Quantity}</TableCell>

                                        <TableCell align="right" sx={{ fontSize: 20, textAlign: 'center' }}>{e.orderdate}</TableCell>

                                    </TableRow>
                                })
                            }



                        </TableBody>
                    </Table>
                </TableContainer>

                <div className="my-8">
                    <Link to='/'>
                        <Button color="secondary" variant="contained">Back to Home</Button>
                    </Link>
                </div>



            </Container>
        </div>
    )
}

export default MyOrders