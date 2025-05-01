import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBookById } from "../services/BookService";
import { Container, Typography, Button } from "@mui/material";

const BookDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const loadBook = async () => {
            try {
                const data = await fetchBookById(id)
                setBook(data)
            } catch (error) {
                console.error('Error with fetching book', error);
            }finally {
                setLoading(false)
            }
        }
        loadBook()

    }, [id])
    if (loading) {
        return (
            <div>Loading</div>
        )
    }
    return (
        <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>{book.title}</Typography>
        <Typography variant="body1" gutterBottom>{book.description}</Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Year: {book.publicationYear}
        </Typography>
        {book.file_url && (
          <Button variant="contained" href={book.file_url} download>
            Download Book
          </Button>
        )}
      </Container>
    )
}

export default BookDetail