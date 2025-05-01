import axios from "axios";
import { API_URL } from "../constants/env";

export const fetchAllBooks = async () => {
    const response = await axios.get(`${API_URL}/books`)
    return response.data.books
}

export const fetchBookById = async (id) => {

    const response = await axios.get(`${API_URL}/books/${id}`)
    return response.data
}