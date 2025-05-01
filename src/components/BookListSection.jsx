import React, {useState, useEffect} from "react"
import {Box, Typography, Grid} from '@mui/material'
import BookCard from "./BookCard"
import { fetchAllBooks } from "../services/BookService"

function BookListSection() {
    const [books, setBooks] = useState()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadBooks = async () => {
            try {
                const data = await fetchAllBooks()
                setBooks(data)
            } catch (error) {
                console.error('Error with fetching books', error);
            } finally {
                setLoading(false)
            }


        }
        loadBooks()
    }, [])
    if (loading) {
        return (
            <div>Loading</div>
        )
    }
    return (
        <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          Book List
        </Typography>
        <Grid container spacing={3}>
          {books.map((book) => (
            <Grid item key={book.bookId} xs={12} sm={6} md={4} lg={3}>
              <BookCard book={book}/>
            </Grid>
          ))}
        </Grid>
      </Box>
    )
}

export default BookListSection