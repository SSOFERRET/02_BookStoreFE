import { setupWorker } from "msw/browser";
import { addReview, reviewForMain, reviewsById } from "./review";
import { bestBooks } from "./books";

const handlers = [reviewsById, addReview, reviewForMain, bestBooks]; //모킹 서버 데이터

export const worker = setupWorker(...handlers);