import {render, screen} from "@testing-library/react";
import Button from '@/components/common/Button';
import { BookStoreThemeProvider } from "@/context/themeContext";

describe('Button  컴포넌트 테스트', () => {
    it('렌더를 확인', () => {
        // 1. 렌더
        render (
            <BookStoreThemeProvider>
                <Button size= "large" scheme="primary">버튼</Button>
            </BookStoreThemeProvider>
        )
        // 2. 확인
        expect(screen.getByText('버튼')).toBeInTheDocument();
    });

    it('size props 적용', () => {
        // 1. 렌더
        render(
            <BookStoreThemeProvider>
                <Button size= "large" scheme="primary">버튼</Button>
            </BookStoreThemeProvider>
        )
        // 2. 확인
        expect(screen.getByRole("button")).toHaveStyle({fontSize: "1.5rem"});
    });

    it('scheme props 적용', () => {
        // 1. 렌더
        render(
            <BookStoreThemeProvider>
                <Button size= "large" scheme="primary">버튼</Button>
            </BookStoreThemeProvider>
        )
        // 2. 확인
        expect(screen.getByRole("button")).toHaveStyle({color: "white"});
    });

    it('scheme props 적용2', () => {
        // 1. 렌더
        render(
            <BookStoreThemeProvider>
                <Button size= "large" scheme="primary">버튼</Button>
            </BookStoreThemeProvider>
        )
        // 2. 확인
        expect(screen.getByRole("button")).toHaveStyle({backgroundColor: "midnightblue"});
    });
});