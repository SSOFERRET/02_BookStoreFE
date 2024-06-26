import React from "react";
import styled from "styled-components";

interface Props {
    children: React.ReactNode;
    linelimit: number;
}

function EllipsisBox({ children, linelimit }: Props) {
    return (
        <EllipsisBoxStyle linelimit={linelimit}>
            <p>{children}</p>
        </EllipsisBoxStyle>
    )
}

interface EllipsisBoxStyleProps {
    linelimit:number;
}

const EllipsisBoxStyle = styled.div<EllipsisBoxStyleProps>`
    p {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: ${({ linelimit }) => linelimit};
            -webkit-box-orient: vertical;
    }
`;

export default EllipsisBox;