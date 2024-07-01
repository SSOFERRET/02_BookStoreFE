import { setupWorker } from "msw/browser";
import { reviewsById } from "./review";

const handlers = [reviewsById]; //모킹 서버 데이터

export const worker = setupWorker(...handlers);