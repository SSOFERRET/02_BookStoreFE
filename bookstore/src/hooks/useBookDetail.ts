import { useEffect, useState } from "react";
import { BookDetail, BookReviewItem } from "@/models/book.model";
import { fetchBook, likeBook, unLikeBook } from "@/api/books.api";
import { addToCart as fetchAddToCart } from "@/api/carts.api";
import { useAuthStore } from "@/store/authStore";
import { useAlert } from "@/hooks/useAlert";
import { fetchBookReview } from "@/api/review.api";
 
export const useBookDetail = (bookId: string | undefined) => {
    const [book, setBook] = useState<BookDetail | null>(null);
    const [cartAdded, setCartAdded] = useState<boolean>(false);
    const [reviews, setReview] = useState<BookReviewItem[]>([]);

    const { isloggedIn } = useAuthStore();
    const {showAlert} = useAlert();

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

    const addToCart = (book: BookDetail, quantity: number) => {
        if (!book) return;
        
        fetchAddToCart({
            book_id: book.book_id,
            quantity: quantity
        }).then(() => {
            setCartAdded(true);
            setTimeout(() => {
                setCartAdded(false);
            }, 3000);
        })
    }

    useEffect(() => {
        if (!bookId) return;
        
        fetchBook(bookId).then((book) => {
            setBook(book);
        })

        fetchBookReview(bookId).then((reviews) => {
            setReview(reviews);
        })
    }, [bookId]);

    return { book, likeToggle, addToCart, cartAdded, reviews };
}