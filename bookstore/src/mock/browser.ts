import { setupWorker } from "msw/browser";
import { addReview, reviewForMain, reviewsById } from "./review";
import { bestBooks } from "./books";
import { banners } from "./banner";

const handlers = [reviewsById, addReview, reviewForMain, bestBooks, banners]; //모킹 서버 데이터

export const worker = setupWorker(...handlers);