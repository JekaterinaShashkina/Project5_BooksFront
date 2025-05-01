import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2e3b55' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
            <img src='../../public/image/icon-book.png' height='34px' width='34px'/> Book Library
        </Typography>

        <Box>
          <Button color="inherit" component={Link} to="/books">
            Book List
          </Button>
          <Button color="inherit" component={Link} to="/add">
            Add Book
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
