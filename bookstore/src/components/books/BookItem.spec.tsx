import { render } from "@testing-library/react";
import BookItem from "@/components/books/BookItem";
import { BookStoreThemeProvider } from "@/context/themeContext";

const dummyBook = {
    book_id: 1,
    title: "dummy",
    img: 5,
    category_id: 1,
    form: "paperback",
    isbn: "Dummy ISBN",
    summary: "Dummy Summary",
    detail: "Dummy Detail",
    author: "Dummy Author",
    pages: 100,
    contents: "Dummy Contents",
    price: 10000,
    likes: 1,
    pub_date: "2021-01-01",
};

describe("BookItem", () => {
    it("렌더 여부", () => {
        const { getByText } = render(
            <BookStoreThemeProvider>
                <BookItem book={dummyBook} />
            </BookStoreThemeProvider>
        );
        expect(getByText(dummyBook.title)).toBeInTheDocument();
        expect(getByText(dummyBook.summary)).toBeInTheDocument();
        expect(getByText(dummyBook.author)).toBeInTheDocument();
        expect(getByText("10,000원")).toBeInTheDocument();
        expect(getByText(dummyBook.likes)).toBeInTheDocument();
    })
})