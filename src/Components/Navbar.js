import * as React from 'react';
import { useContext, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Link, useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LoadingBar from 'react-top-loading-bar'
import logo from '../assets/images/logo2.png'
import UserContext from './context/Users/UserContext';


const Navbar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const context = useContext(UserContext);
    let { progress, setprogress } = context;

    useEffect(() => {
        setTimeout(() => {
            setprogress(50);
        }, 200);
        setTimeout(() => {
            setprogress(75);
        }, 200);
        setTimeout(() => {
            setprogress(100);
        }, 200);
    }, [setprogress]);


    const handlelogout = () => {
        localStorage.removeItem('token');
        navigate('/login')
    }

    const navigate = useNavigate();

    /* Main Functions */
    const handleprofile = () => {
        handleClose();
        navigate('/profile');
    }
    const handlemyorders = () => {
        handleClose();
    }




    return (
        <Box sx={{ flexGrow: 1 }}>


            <AppBar position="static" color='navbarcolor'>
                <Toolbar>

                    <Typography variant="img" component="div" sx={{ flexGrow: 1 }}>
                        <Link to='/'>
                            <img src={logo} alt="Not found" className='w-16 h-16  border-red-500' />
                        </Link>
                    </Typography>


                    <Typography variant="im" component="div" className='grow text-white text-3xl'>
                        Ravi Laundry Management System
                    </Typography>

                    <Link to='/about'>
                        <button color="inherit" className='mr-4 border-2 p-2 rounded-md border-grey-400 text-white '>About Us</button>
                    </Link> 

                    {/* localStorage stuff is here */}
                    {!localStorage.getItem('token') ? <div className="d-flex">
                        <Link to='/login'>
                            <button color="inherit" className='mr-4 border-2 p-2 rounded-md border-grey-400 text-white '>Login</button>
                        </Link>
                        <Link to='/signup'>
                            <button color="inherit" className='mr-4 border-2 p-2 rounded-md border-grey-400 text-white '>SignUp</button>
                        </Link>
                    </div> : <div className='d-flex'>

                        <button color="inherit" className='mr-4 border-2 p-2 rounded-md border-grey-400 text-white ' onClick={handlelogout}>Log Out</button>

                        <Avatar sx={{ bgcolor: 'grey', cursor: 'pointer', "&:hover": { backgroundColor: "#AAA6AD" } }} aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >MS
                        </Avatar>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <Link to='/profile'>
                                <MenuItem onClick={handleprofile}>Profile</MenuItem>
                            </Link>
                            <Link to='/myorder'>
                                <MenuItem onClick={handlemyorders}>My Orders</MenuItem>
                            </Link>
                            <MenuItem onClick={handlelogout}>Logout</MenuItem>
                        </Menu>


                    </div>}







                </Toolbar>
            </AppBar>

            <LoadingBar
                color='#0048F9'
                height={3}
                progress={progress}
            />
        </Box >
    )
}

export default Navbar