import { BookReviewItem as IBookReviewItem} from "@/models/book.model";
import styled from "styled-components";
import BookReviewItem from "../book/BookReviewItem";

interface Props {
    reviews: IBookReviewItem[];
}

function MainReview({reviews}: Props) {
    return (
        <MainReviewStyle>
            <div>
                {
                    reviews.map((review) => (
                        <BookReviewItem key={review.id} review={review}/>
                    ))
                }
            </div>
        </MainReviewStyle>
    )
}

const MainReviewStyle = styled.div`

`;

export default MainReview;
