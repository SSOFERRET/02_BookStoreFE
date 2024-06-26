import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useBookDetail } from "../hooks/useBookDetail";
import { getImgSrc } from "../utils/image";
import Title from "../components/common/Title";
import { BookDetail as IBookDetail} from "../models/book.model";
import { formatDate, formatNumber } from "../utils/format";
import { Link } from "react-router-dom";

const bookInfoList = [
    {
        label: "카테고리",
        key: "category_name",
        filter: (book: IBookDetail) => (
            <Link to={
                `/books?category_id=${book.category_id}`
            }>{book.category_name}</Link>
        ),
    },
    {
        label: "포맷",
        key: "form"
    },
    {
        label: "페이지",
        key: "pages"
    },
    {
        label: "ISBN",
        key: "isbn"
    },
    {
        label: "출간일",
        key: "pub_date",
        filter: (book: IBookDetail) => {
            return formatDate(book.pub_date);
        }
    },
    {
        label: "가격",
        key: "price",
        filter: (book: IBookDetail) => {
            return `${formatNumber(book.price)}원`
        }
    },
];

function BookDetail() {
    const { bookId } = useParams();
    const { book } = useBookDetail(bookId);

    if (!book) return null;

    return (
        <BookDetailStyle>
            <header className="header">
                <div className="img">
                    <img src={getImgSrc(book.img)} 
                    alt={book.title}  />
                </div>
                <Title size="large" color="text">
                    {book.title}
                </Title>
                {
                    bookInfoList.map((item) => (
                        <dl>
                            <dt>{item.label}</dt>
                            <dd>{ item.filter ? item.filter(book)
                            : book[item.key as keyof IBookDetail]}</dd>
                        </dl>
                    ))
                }
            </header>
        </BookDetailStyle>
    )
}

const BookDetailStyle = styled.div`
    
`;

export default BookDetail;