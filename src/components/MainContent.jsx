import { Box } from '@mui/material';
import HeroSection from './HeroSection';
import BookListSection from './BookListSection';
import NewBookSection from './NewBookSection';

function MainContent() {
    return (
        <Box sx={{flex: 1, p: 3}}>
            <HeroSection/>
            <BookListSection/>
            <NewBookSection/>
        </Box>
    )
}

export default MainContent;