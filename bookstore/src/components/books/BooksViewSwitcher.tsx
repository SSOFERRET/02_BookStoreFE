import styled from "styled-components";
import Button from "@/components/common/Button";
import { FaList, FaTh } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { QUERYSTRING } from "@/components/constants/querystring";
import { useEffect } from "react";

export type ViewMode = "grid" | "list";

const viewOptions = [
    {
        value: "list",
        icon: <FaList />
    },
    {
        value: "grid",
        icon: <FaTh />
    },
];

function BooksViewSwitcher() {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSwitch = (value: ViewMode) => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set(QUERYSTRING.VIEW, value);
        setSearchParams(newSearchParams);
    }

    useEffect(() => {
        if (!searchParams.get(QUERYSTRING.VIEW)) {
            handleSwitch("grid" as ViewMode);
        }
    }, []);

    return (
        <BooksViewSwitcherStyle>
            {
                viewOptions.map((option) => (
                    <Button size="medium" 
                    scheme={searchParams.get(QUERYSTRING.VIEW) === option.value ? 
                        "primary" : "normal"
                    }
                    onClick={() => handleSwitch(option.value as ViewMode)}>
                        {option.icon}
                    </Button>
                ))
            }
        </BooksViewSwitcherStyle>
    )
}

const BooksViewSwitcherStyle = styled.div`
    display: flex;
    gap: 8px;
    svg {
        fill: #fff;
    };
`;

export default BooksViewSwitcher;