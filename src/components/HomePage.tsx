import { Box, Button } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import MenuAppBar from "./MenuAppBar";

function HomePage() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <MenuAppBar />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, p: 2 }}>
                <Button
                    variant="contained"
                    component={Link}
                    to="/api/books"
                    sx={{ m: 2, width: '250px', height: '60px', fontSize: '1.2rem', bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.dark' } }}
                >
                    Books
                </Button>
                <Button
                    variant="contained"
                    component={Link}
                    to="/api/loans"
                    sx={{ m: 2, width: '250px', height: '60px', fontSize: '1.2rem', bgcolor: '#34aac1', '&:hover': { bgcolor: 'secondary.dark' } }}
                >
                    Loans
                </Button>
                <Button
                    variant="contained"
                    component={Link}
                    to="/api/users"
                    sx={{ m: 2, width: '250px', height: '60px', fontSize: '1.2rem', bgcolor: '#5d86b4', '&:hover': { bgcolor: 'success.dark' } }}
                >
                    Users
                </Button>
            </Box>
            <Outlet />
        </Box>
    );
}

export default HomePage;
