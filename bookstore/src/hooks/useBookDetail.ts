import { useEffect, useState } from "react";
import { BookDetail } from "../models/book.model";
import { fetchBook, likeBook, unLikeBook } from "../api/books.api";
import { useAuthStore } from "../store/authStore";
import { useAlert } from "./useAlert";
 
export const useBookDetail = (bookId: string | undefined) => {
    const [book, setBook] = useState<BookDetail | null>(null);
    const { isloggedIn } = useAuthStore();
    const showAlert = useAlert();

    const likeToggle = () => {
        if (!isloggedIn) {
            showAlert('로그인이 필요합니다.');
            return;
        }
         
        if (!book) return;

        if (book.liked) {
            unLikeBook(book.book_id).then(() => {
                setBook({
                    ...book,
                    liked: false,
                    likes: book.likes - 1,
                });
            });
        } else {
            console.log(book.likes);
            likeBook(book.book_id).then(() => {
                setBook({
                    ...book,
                    liked: true,
                    likes: book.likes + 1,
                });
            });
        }
    };

    useEffect(() => {
        if (!bookId) return;
        
        fetchBook(bookId).then((book) => {
            setBook(book);
        })
    }, [bookId]);

    return { book, likeToggle };
}