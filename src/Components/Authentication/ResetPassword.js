import React, { useState } from 'react'
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
// import TextField from '@mui/material/TextField';
import Button from '@mui/joy/Button';
import Alert from '@mui/joy/Alert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import IconButton from '@mui/joy/IconButton';

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

export default function ResetPassword() {

    const [userinfo, setUserinfo] = useState({ email: "" });

    const handleOnChange = (e) => {
        setUserinfo({ ...userinfo, [e.target.name]: e.target.value })
    }

    const [showmsg, setShowmsg] = useState('none');


    const handlesendlink = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/user/send-reset-password-email/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: userinfo.email })
        });

        const json = await response.json();

        if (json.msg === "Password reset link send Successfully check email") {
            setShowmsg('block');
        }
        

    }

    return (
        <CssVarsProvider>
            <main className=' border-red-600 py-4'>
                { <ModeToggle /> }
                <Sheet
                    sx={{
                        maxWidth: 400,
                        mx: 'auto', // margin left & right
                        my: 4, // margin top & botom
                        py: 3, // padding top & bottom
                        px: 2, // padding left & right
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        borderRadius: 'sm',
                        boxShadow: 'md',
                    }}
                    variant="outlined"
                >
                    <div>
                        <Typography level="h4" component="h1" className='text-center my-2'>
                            <b>Reset Password</b>
                        </Typography>
                    </div>

                    <TextField
                        name="email"
                        type="email"
                        placeholder="Ex :- xxx@gmail.com"
                        label="Enter Your Email"
                        value={userinfo.email}
                        onChange={handleOnChange}
                    />

                    <Button
                        sx={{
                            mt: 1, // margin top
                        }}
                        onClick={handlesendlink}>
                        Send Link
                    </Button>

                </Sheet>

                <div className={` border-red-400 d-${showmsg} text-center`}>
                    <Alert
                        key="success"
                        sx={{ alignItems: 'flex-start' }}
                        startDecorator={React.cloneElement(<CheckCircleIcon />, {
                            sx: { mt: '2px', mx: '4px' },
                            fontSize: 'xl2',
                        })}
                        variant="soft"
                        color='success'
                        endDecorator={
                            <IconButton variant="soft" size="sm" color='success'>
                                <CloseRoundedIcon />
                            </IconButton>
                        }
                    >
                        <div className=''>
                            <Typography fontWeight="lg" mt={0.25}>
                                Link Send Successfully
                            </Typography>
                            <Typography fontSize="sm" sx={{ opacity: 0.8 }}>
                                Check your email
                            </Typography>
                        </div>
                    </Alert>
                </div>
            </main>
        </CssVarsProvider>
    );
}
