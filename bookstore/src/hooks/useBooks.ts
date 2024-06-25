import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Book } from "../models/book.model";
import { Pagination } from "../models/pagenation.model";
import { fetchBooks } from "../api/books.api";
import { QUERYSTRING } from "../components/constants/querystring";
import { LIMIT } from "../components/constants/pagination";

export const useBooks = () => {
    const location = useLocation();

    const [books, setBooks] = useState<Book[]>([]);
    const [pagination, setPagination] = useState<Pagination>(
        {
            totalCount: 0,
            currentPage: 1,
        }
    );

    useEffect(() => {
        const params = new URLSearchParams(location.search);

        fetchBooks({
            category_id: params.get(QUERYSTRING.CATEGORY_ID) ? 
            Number(params.get(QUERYSTRING.CATEGORY_ID))
            : undefined,
            news: params.get(QUERYSTRING.NEWS) ? 
            Boolean(params.get(QUERYSTRING.NEWS))
            : undefined,
            currentPage: params.get(QUERYSTRING.PAGE) ?
            Number(params.get(QUERYSTRING.PAGE))
            : undefined,
            limit: LIMIT,
        }).then((res) => {
            setBooks(res.books);
            setPagination(res.pagination);
        })
    }, [location.search])
    return { books, pagination };
};