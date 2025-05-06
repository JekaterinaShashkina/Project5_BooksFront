import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBookById } from "../services/BookService";
import { Box, Typography, Button, Divider, CardMedia } from "@mui/material";

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
        <Box sx={{ maxWidth: '1280px', margin: 'auto', p: 4 }}>
          {/* Заголовок */}
          <Typography variant="h4" align="center" gutterBottom>
            {book.title}
          </Typography>
    
          {/* Основной контент */}
          <Box sx={{ display: 'flex', gap: 20, mt: 6 }}>
            {/* Левая колонка — обложка и кнопка */}
            <Box sx={{ flex: '1 1 250px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid red'}}>
                {book.cover_url && (
                    <CardMedia
                        component="img"
                        image={`http://localhost:3000${book.cover_url.replace('/public', '')}`}
                        alt={book.title}
                        sx={{
                        height: 240,
                        width: '100%',
                        objectFit: 'contain',
                        }}
                    />
                )}

              {book.file_url && (
                <Button
                  variant="contained"
                  color="primary"
                  href={book.file_url}
                  target="_blank"
                  sx={{ mt: 2 }}
                >
                  Download EPUB
                </Button>
              )}
            </Box>
    
            {/* Правая колонка — описание */}
            <Box sx={{ flex: '2 1 400px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid blue' }}>
              <Typography variant="subtitle1" gutterBottom>
                <strong>Authors:</strong>{' '}
                {book.authors.map((a, i) => (
                  <span key={a.authorId}>
                    {a.first_name} {a.last_name}
                    {i < book.authors.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </Typography>
    
              <Typography variant="subtitle1" gutterBottom>
                <strong>Publication Year:</strong> {book.publicationYear}
              </Typography>
    
              <Typography variant="subtitle1" gutterBottom>
                <strong>Category:</strong> {book.category?.name}
              </Typography>
    
              <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Description:</strong> {book.description}
              </Typography>
            </Box>
          </Box>
        </Box>
      );
}

export default BookDetail