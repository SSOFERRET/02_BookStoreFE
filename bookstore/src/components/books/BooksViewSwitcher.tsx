import styled from "styled-components";
import Button from "../common/Button";
import { FaList, FaTh } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { QUERYSTRING } from "../constants/querystring";

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

    const handleSwitch = (value: string) => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set(QUERYSTRING.VIEW, value);
        setSearchParams(newSearchParams);
    }

    return (
        <BooksViewSwitcherStyle>
            {
                viewOptions.map((option) => (
                    <Button size="medium" 
                    scheme={searchParams.get(QUERYSTRING.VIEW) === option.value ? 
                        "primary" : "normal"
                    }
                    onClick={() => handleSwitch(option.value)}>
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