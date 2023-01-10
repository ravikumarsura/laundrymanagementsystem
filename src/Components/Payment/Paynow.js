import React, { useContext, useEffect } from 'react'
import { Container } from '@mui/system'
import Button from '@mui/material/Button';
import qr from '../../assets/images/qrcode.png'
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/Users/UserContext';
const Paynow = () => {
    const navigate = useNavigate();

    const context = useContext(UserContext);
    let { setprogress, newlist } = context;


    const handleDone = () => {

        newlist.map(async (e, index) => {
            const response = await fetch("", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Clothtype: e.Clothtype, WashingType: e.WashingType, Quantity: e.Quantity, userid: e.userid })
            });


            const json = await response.json();

            if (json.msg === "Order Created Successfully") {
                console.log('item added ', index);
            }
        })

        navigate('/payconfirm');
    }

    useEffect(() => {
        console.log('our new list is ', newlist);


        setprogress(50)
        setTimeout(() => {
            setprogress(65)
        }, 500);
        setTimeout(() => {
            setprogress(100)
        }, 700);

    }, [])

    return (
        <div>
            <Container maxwidth="md" sx={{ height: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <div className='text-4xl mb-[65px] font-semibold  '>Scan the QR to pay</div >

                <img src={qr} alt="not found" />
                <Button color="secondary" variant="contained" sx={{ pX: 3, pY: 2, mt: 4 }} onClick={handleDone}>Done</Button>
            </Container>


        </div>
    )
}

export default Paynow