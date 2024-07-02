import { useEffect, useState } from "react";
import { BookDetail, BookReviewItem, BookReviewItemWrite } from "@/models/book.model";
import { fetchBook, likeBook, unLikeBook } from "@/api/books.api";
import { addToCart as fetchAddToCart } from "@/api/carts.api";
import { useAuthStore } from "@/store/authStore";
import { useAlert } from "@/hooks/useAlert";
import { addBookReview, fetchBookReview } from "@/api/review.api";
import { useToast } from "./useToast";
 
export const useBookDetail = (bookId: string | undefined) => {
    const [book, setBook] = useState<BookDetail | null>(null);
    const [cartAdded, setCartAdded] = useState<boolean>(false);
    const [reviews, setReview] = useState<BookReviewItem[]>([]);

    const { isloggedIn } = useAuthStore();
    const {showAlert} = useAlert();

    const { showToast } = useToast();

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
                showToast("좋아요가 취소되었습니다.");
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
            showToast("좋아요가 등록되었습니다.");
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

    const addReview = (data: BookReviewItemWrite) => {
        if (!book) return;

        addBookReview(book.book_id.toString(), data).then((res) => {
            // fetchBookReview(book.book_id.toString()).then((reviews) => {
            //     setReview(reviews);
            // })
            showAlert(res?.message);
        })
    }

    return { book, likeToggle, addToCart, cartAdded, reviews, addReview };
}