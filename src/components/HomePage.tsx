import { Box, Button } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import MenuAppBar from "./MenuAppBar";

function HomePage() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <MenuAppBar />
            <Button variant="contained" component={Link} to="/books" sx={{ m: 1 }}>
                Books
            </Button>
            <Button variant="contained" component={Link} to="/loans" sx={{ m: 1 }}>
                Loans
            </Button>
            <Outlet />
        </Box>
    );
}

export default HomePage;
