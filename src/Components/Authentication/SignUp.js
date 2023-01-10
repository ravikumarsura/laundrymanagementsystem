import React, { useState, useContext, useEffect } from 'react'
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
// import TextField from '@mui/material/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import UserContext from '../context/Users/UserContext';
import { useNavigate } from 'react-router-dom';


const ModeToggle = () => {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);



    // necessary for server-side rendering
    // because mode is undefined on the server
    React.useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }

    return (
        <Button
            variant="outlined"
            onClick={() => {
                if (mode === 'light') {
                    setMode('dark');
                } else {
                    setMode('light');
                }
            }}
        >
            {mode === 'light' ? 'Turn dark' : 'Turn light'}
        </Button>
    );
};

export default function SignUp() {

    const context = useContext(UserContext);
    let { setprogress } = context;

    const navigate = useNavigate();

    const [userinfo, setUserinfo] = useState({ name: "Sura Ravikumar", email: "ravikumarsura.career@gmail.com", password: "1234567890", password2: "1234567890", mobile: "9703612345", address: "srikakulam" });

    const handleOnChange = (e) => {
        setUserinfo({ ...userinfo, [e.target.name]: e.target.value })
    }

    const handleSignUp = async (e) => {
        e.preventDefault();

        setprogress(30)
        const response = await fetch("http://127.0.0.1:8000/api/user/register/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: userinfo.email, name: userinfo.name, password: userinfo.password, password2: userinfo.password2, mobile: userinfo.mobile, tc: false, adress: userinfo.address })
        });

        setprogress(80)
        // json contains success msg and auth token
        const json = await response.json();

        if (json.msg === "Registration Success") {
            console.log('Registration good ravisura')
            localStorage.setItem('token', json.token.access);
            navigate('/')
        }

        setprogress(100)
    }


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


    return (
        <CssVarsProvider>
            <main className=' border-red-600 py-4'>
                { <ModeToggle /> }
                <Sheet
                    sx={{
                        maxWidth: 450,
                        mx: 'auto', // margin left & right
                        my: 1, // margin top & botom
                        py: 3, // padding top & bottom
                        px: 2, // padding left & right
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1.4,
                        borderRadius: 'sm',
                        boxShadow: 'md',
                    }}
                    variant="outlined"
                >
                    <div>
                        <Typography level="h4" component="h1" className='text-center my-2'>
                            <b>SignUp To FastWash!</b>
                        </Typography>
                    </div>
                    <TextField
                        // html input attribute
                        name="name"
                        type="text"
                        variant="outlined"
                        placeholder="Enter the Username"
                        // pass down to FormLabel as children
                        label="Name"
                        value={userinfo.name}

                        onChange={handleOnChange}
                    />

                    <TextField
                        // html input attribute
                        name="email"
                        type="email"
                        variant="outlined"
                        placeholder="johndoe@email.com"
                        // pass down to FormLabel as children
                        label="Email"
                        value={userinfo.email}

                        onChange={handleOnChange}
                    />

                    <TextField
                        // html input attribute
                        name="mobile"
                        type="number"
                        variant="outlined"
                        placeholder="xxxxxxxxxxx"
                        // pass down to FormLabel as children
                        label="Mobile Number"
                        value={userinfo.mobile}

                        onChange={handleOnChange}
                    />

                    <TextField
                        // html input attribute
                        name="address"
                        type="text"
                        variant="outlined"
                        placeholder="Ex:- 180-Laxmi-vihar,Bhilwara,Rajasthan"
                        // pass down to FormLabel as children
                        label="Address"
                        value={userinfo.address}

                        onChange={handleOnChange}
                    />

                    <TextField
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        label="Password"
                        value={userinfo.password}
                        onChange={handleOnChange}
                    />

                    <TextField
                        name="password2"
                        type="password"
                        placeholder="Confirm password"
                        label="Confirm Password"
                        value={userinfo.password2}
                        onChange={handleOnChange}
                    />
                    <Button
                        sx={{
                            mt: 1, // margin top
                        }}
                        onClick={handleSignUp}>
                        Sign Up
                    </Button>
                    <Typography
                        endDecorator={<Link href="/login">Log in</Link>}
                        fontSize="sm"
                        sx={{ alignSelf: 'center' }}
                    >
                        Already have an account?
                    </Typography>
                </Sheet>
            </main>
        </CssVarsProvider>
    );
}
