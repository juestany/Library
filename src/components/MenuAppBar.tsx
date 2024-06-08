import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import {useLanguage} from "../api/LanguageProvider"; // Import logout icon

export default function MenuAppBar() {
    const navigate = useNavigate();
    // @ts-ignore
    const { language, toggleLanguage } = useLanguage();
    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <AppBar position="static">
            <Toolbar>
                {/* Home icon and text */}
                <Link to="/api/home" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu">
                        <Typography variant="h6" component="div">
                            {language === 'English' ? 'Home' : 'Strona główna'}
                        </Typography>
                    </IconButton>
                </Link>

                {/* Middle text */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {language === 'English' ? 'Library' : 'Księgarnia'}
                </Typography>

                <IconButton size="large" color="inherit" onClick={toggleLanguage}>
                    <Typography variant="h6" component="div" style={{ marginRight: '8px' }}>
                        {language === 'English' ? '🇵🇱' : '🇬🇧'}
                    </Typography>
                </IconButton>

                {/* Logout text and icon */}
                <IconButton size="large" color="inherit" onClick={handleLogout}>
                    <Typography variant="h6" component="div" style={{ marginRight: '8px' }}>
                        {language === 'English' ? 'Log out' : 'Wyloguj się'}
                    </Typography>
                    <LogoutIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
