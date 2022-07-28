import React, { createContext, useState } from 'react'
import { Alert, Button, Snackbar } from "@mui/material";
export const AlertContext = createContext();
const AlertContextProvider = ({children}) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('warning');
    const [vertical, setVertical] = useState('top');
    const [horizontal, setHorizontal] = useState('center');
    const handleClick = (message, color) => {
        setMessage(message);
        setColor(color);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    return <AlertContext.Provider value={{ handleClick, handleClose }}>
            <Snackbar open={open} autoHideDuration={2500} onClose={handleClose} anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}>
                <Alert onClose={handleClose} severity={color} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
             {children}
        </AlertContext.Provider>;
}

export default AlertContextProvider