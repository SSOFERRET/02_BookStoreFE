import { Book, BookReviewItem } from "@/models/book.model";
import { http, HttpResponse } from "msw";
import { fakerKO as faker } from "@faker-js/faker";

const bestBooksData: Book[] = Array.from({length: 10}).map((_, index) => ({
    book_id: index,
    title: faker.lorem.sentence(),
    img: faker.helpers.rangeToNumber({ min: 300, max: 400}),
    category_id: faker.helpers.rangeToNumber({min: 0, max: 2}),
    form: "paper",
    isbn: faker.commerce.isbn(),
    summary: faker.lorem.paragraph(),
    detail: faker.lorem.paragraph(),
    author: faker.person.lastName() + faker.person.firstName(),
    pages: faker.helpers.rangeToNumber({ min: 100, max: 400}),
    contents: faker.lorem.paragraph(),
    price: faker.helpers.rangeToNumber({ min: 10000, max: 50000}),
    likes: faker.helpers.rangeToNumber({ min: 0, max: 50}),
    pub_date: faker.date.past().toISOString(),
}))


export const bestBooks = http.get("http://localhost:9999/books/best", () => {
    return HttpResponse.json(bestBooksData, {status: 200})
})