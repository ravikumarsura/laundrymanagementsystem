import React from 'react'
import { useEffect, useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import washingmachine from '../../assets/images/washingmachine.png'
import Button from '@mui/material/Button';
import ServiceCard from './ServiceCard';
import ClientReview from './ClientReview';
import UserContext from '../context/Users/UserContext';

import img1 from '../../assets/images/ser1.png'
import img2 from '../../assets/images/ser2.png'
import img3 from '../../assets/images/ser3.png'
import img4 from '../../assets/images/ser4.png'


import { useNavigate } from 'react-router-dom';
import ServicesM from './ServicesM';



const MidContainer = () => {

    const context = useContext(UserContext);
    let { setprogress } = context;
    useEffect(() => {
        /* loading bar starts*/

        setprogress(50)
        setTimeout(() => {
            setprogress(65)
        }, 500);
        setTimeout(() => {
            setprogress(100)
        }, 700);

        /* loading bar ends*/
    }, [])

    const navigate = useNavigate();
    const handleTryUs = () => {
        if (!localStorage.getItem('token')) {
            navigate('/login');
            return;
        }
        navigate('/order')
    }

    return (
        <>
            <CssBaseline />


            <Container maxWidth="xl" className={` border-red-500 h-96 flex items-center justify-around`}
                sx={{ display: 'flex' }} >
                <div className=' border-green-200 w-2/4'>
                    <Typography variant='h2' className='p-2  w-fit border-red-400' sx={{ fontWeight: '350' }} component='div'>
                        Ravikumar Laundry
                    </Typography>
                    <Typography variant='h4' className='p-2  w-fit border-red-400' component='div'>
                        Cleaning Clothes made easy with Ravi Laundry
                    </Typography>
                    <Typography variant='h5' className='p-2  border-red-400 w-3/4 '>
                    Laundry day is a weekend chore for the households. It is a responsibility that keeps from getting out of hand. Laundry is never 100% finished, but if everything in the home is clean, it leaves us feeling refreshed.A Feature-Rich Laundry Software for Dry Cleaners And Laundries To Manage All Day-to-Day Operations
                    </Typography>
                    <Button variant="contained" color='trycolor' sx={{ color: 'orange', marginTop: '4px', borderRadius: 6, paddingX: 4 }} onClick={handleTryUs}>Try us</Button>

                </div>

                <div className="logoimage w-96 h-fit  border-green-5">
                    <img src={washingmachine} alt="" />
                </div>

            </Container>

            {/* <div className='border-t-2 w-full border-black'></div> */}

            <Container maxWidth="xl" className=' border-red-800'>
                <Typography variant='h3' className='p-2   w-fit border-red-400' sx={{ fontWeight: '350', margin: '0px auto' }} component='div'>
                    Our Services
                </Typography>

                <div className='flex items-center justify-around mt-10  border-red-400'>
                    <ServiceCard img={img1} sertitle="Advanced Washing with Machines" serContent="" />
                    <ServiceCard img={img2} sertitle="Fast Service" serContent="" />
                    <ServiceCard img={img3} sertitle="Online Payment Accepted" serContent="" />
                    <ServiceCard img={img4} sertitle="Free Home Delivery" serContent="" />
                </div>
            </Container>
            

            <Container maxWidth="xl" className=' border-red-800 my-4'>
                <Typography variant='h3' className='p-2   w-fit border-red-400 mb-4' sx={{ fontWeight: '350', margin: '0px auto' }} component='div'>
                    Our Products
                </Typography>
                <ServicesM />
            </Container>

            <Container maxWidth="xl" className=' border-red-800 my-4'>
                <Typography variant='h3' className='p-2   w-fit border-red-400 mb-4' sx={{ fontWeight: '350', margin: '0px auto' }} component='div'>
                    Our Clients
                </Typography>
                <ClientReview />
            </Container>
        </>
    )
}

export default MidContainer