import { Container } from '@mui/system'
import { useState, useContext, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react'
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ButtonGroup from '@mui/material/ButtonGroup';
import CancelIcon from '@mui/icons-material/Cancel';
import UserContext from '../context/Users/UserContext';
import OrderSummary from '../Tables/OrderSummary';


const Order = () => {

    const [count] = React.useState(1);




    const [clothlist, setClothlist] = useState([{ userid: localStorage.getItem('userid'), Clothtype: '', WashingType: '', Quantity: 0 }]);


    const HandleClothAdd = () => {
        setClothlist([...clothlist, { userid: localStorage.getItem('userid'), Clothtype: '', WashingType: '', Quantity: 0 }]);
    }

    const HandleClothDelete = (index) => {
        const list = [...clothlist];
        // this will delete 1 record starting from index from the list
        list.splice(index, 1);
        setClothlist(list);
    }

    console.log(clothlist);

    const handleClothTypeChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...clothlist];
        list[index][name] = value;
        setClothlist(list);

    }
    const handleWashingTypeChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...clothlist];
        list[index][name] = value;
        setClothlist(list);
    }

    const handleAdd = (index) => {
        const list = [...clothlist];
        list[index]['Quantity']++;
        setClothlist(list);
    }
    const handleSub = (index) => {
        const list = [...clothlist];
        list[index]['Quantity']--;
        setClothlist(list);
    }

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
        console.log("the id of the user is " + localStorage.getItem('userid'));
    }, [])

    const [displayordersum, setDisplayordersum] = useState('none');
    const handleGiveOrder = () => {
        if (displayordersum === 'block') {
            setDisplayordersum('none');
        }
        else {
            setDisplayordersum('block');
        }
    }


    return (
        <>
            <Container maxWidth='lg' className=' border-green-600  flex justify-center flex-col items-center text-center'>
                <Typography variant='h3' className='p-2   w-fit border-red-400 font-light mx-auto' component='div'>
                    Order Clothes for Washing
                </Typography>

                <div className=" border-red-500 w-[620px] mx-auto">
                    <TextField fullWidth label="UserName" id="fullWidth" margin="dense" sx={{ width: 600 }} />


                    {
                        clothlist.map((cloth, index) => {
                            return (<div className=' border-red-400 flex items-center justify-center' id="bucketitem" key={index}>
                                <Box>
                                    <InputLabel htmlFor="grouped-native-select">ClothType</InputLabel>
                                    <Select native defaultValue="" id="grouped-native-select" label="Grouping" value={cloth.Clothtype} onChange={(e) => { handleClothTypeChange(e, index) }} name="Clothtype">
                                        <option aria-label="None" value="" />
                                        <optgroup label="Category 1">
                                            <option value={"Shirt"}>Shirt</option>
                                            <option value={"Pant"}>Pant</option>
                                        </optgroup>
                                        <optgroup label="Category 2">
                                            <option value={"Lower"}>Lower</option>
                                            <option value={"T Shirt"}>T Shirt</option>
                                        </optgroup>
                                    </Select>
                                </Box>

                                <Box sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel htmlFor="grouped-select">Select Washing</InputLabel>
                                    <Select defaultValue="" id="grouped-select" label="Grouping" name="WashingType"
                                        value={cloth.WashingType} onChange={(e) => { handleWashingTypeChange(e, index) }}>
                                        <MenuItem value={"Normal Wash"}>Normal Wash</MenuItem>
                                        <MenuItem value={"Bleach Wash"}>Bleach Wash</MenuItem>
                                        <MenuItem value={"Acid Wash"}>Acid Wash</MenuItem>
                                        <MenuItem value={"Sand Blasting"}>Sand Blasting</MenuItem>
                                    </Select>
                                </Box>

                                <div className='flex justify-center p-10'>
                                    <TextField
                                        disabled
                                        id="outlined-disabled"
                                        label="Quantity"
                                        defaultValue={count}
                                        name="Quantity"
                                        value={cloth.Quantity}
                                    />
                                    <ButtonGroup>
                                        <Button
                                            aria-label="reduce"
                                            // onClick={(e) => {
                                            //     setCount(Math.max(count - 1, 0));
                                            // }}
                                            onClick={() => handleSub(index)}
                                        >
                                            <RemoveIcon fontSize="small" />
                                        </Button>
                                        <Button
                                            aria-label="increase"
                                            onClick={() => handleAdd(index)}
                                        >
                                            <AddIcon fontSize="small" />
                                        </Button>
                                    </ButtonGroup>

                                    <Tooltip title="Add item" sx={{ marginLeft: 4 }} color="primary" onClick={() => HandleClothDelete(index)}>
                                        <IconButton>
                                            <CancelIcon />
                                        </IconButton>
                                    </Tooltip>


                                </div>


                            </div>)
                        })
                    }




                    <div className=' border-red-400 text-right px-2'>


                        <Tooltip title="Add item" color="primary" onClick={HandleClothAdd}>
                            <IconButton>
                                <AddCircleIcon />
                            </IconButton>
                        </Tooltip>
                    </div>




                </div>


                <Button variant="contained" color="secondary" sx={{ marginY: 2, paddingY: 1, paddingX: 3 }} onClick={handleGiveOrder}>Show Summary</Button>





            </Container>


            <div className={`d-${displayordersum}`}>
                <OrderSummary neworderlist={clothlist} />
            </div>
        </>
    )
}

export default Order