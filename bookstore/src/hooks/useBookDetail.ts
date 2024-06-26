import { useEffect, useState } from "react";
import { BookDetail } from "../models/book.model";
import { fetchBook } from "../api/books.api";
 
export const useBookDetail = (bookId: string) => {
    const [book, setBook] = useState<BookDetail | null>(null);

    useEffect(() => {
        fetchBook(bookId).then((book) => {
            setBook(book);
        })
    }, [bookId]);

    return { book };
}