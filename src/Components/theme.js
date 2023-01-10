import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
    typography: {
        fontFamily: [
            '"Segoe UI"',
        ].join(',')
    },

    // palette vs pallete
    palette: {
        primary: {
            main: "#4bd650"
        },
        secondary: {
            main: '#13eda4'
        }
        ,
        navbarcolor:{
            main:"orange"
        },
        trycolor:{
            main:'#ed6313'
        }
    }
})