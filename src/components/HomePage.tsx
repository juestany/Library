import { Box, Button } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import MenuAppBar from "./MenuAppBar";
import {useApi} from "../api/ApiProvider";

function HomePage() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <MenuAppBar />
            <Button variant="contained" component={Link} to="/api/books" sx={{ m: 1 }}>
                Books
            </Button>
            <Button variant="contained" component={Link} to="/api/loans" sx={{ m: 1 }}>
                Loans
            </Button>
            <Outlet />
        </Box>
    );
}

export default HomePage;
