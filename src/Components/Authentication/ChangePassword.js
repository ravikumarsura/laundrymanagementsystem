import React, { useState } from 'react'
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
// import TextField from '@mui/material/TextField';
import Button from '@mui/joy/Button';
import { useParams } from 'react-router-dom';

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

export default function ChangePassword() {

    const [userinfo, setUserinfo] = useState({ NewPassword: "1234567890", ConfirmPassword: "1234567890" });

    const handleOnChange = (e) => {
        setUserinfo({ ...userinfo, [e.target.name]: e.target.value })
    }



    const { id, token } = useParams();



    const handlesavelink = async (e) => {
        const response = await fetch(`http://127.0.0.1:8000/api/user/reset-password/${id}/${token}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password: userinfo.NewPassword, password2: userinfo.ConfirmPassword })
        });

        const json = await response.json();
        console.log('save response => ', json);
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
                        name="NewPassword"
                        type="password"
                        placeholder="xxxxxx"
                        label="New Password"
                        value={userinfo.NewPassword}
                        onChange={handleOnChange}
                    />

                    <TextField
                        name="ConfirmPassword"
                        type="password"
                        placeholder="xxxxxx"
                        label="Confirm Password"
                        value={userinfo.ConfirmPassword}
                        onChange={handleOnChange}
                    />

                    <Button
                        sx={{
                            mt: 1, // margin top
                        }}
                        onClick={handlesavelink}>
                        Save
                    </Button>

                </Sheet>
            </main>
        </CssVarsProvider>
    );
}
