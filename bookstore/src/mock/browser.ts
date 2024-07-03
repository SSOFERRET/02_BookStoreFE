import { setupWorker } from "msw/browser";
import { addReview, reviewForMain, reviewsById } from "./review";

const handlers = [reviewsById, addReview, reviewForMain]; //모킹 서버 데이터

export const worker = setupWorker(...handlers);