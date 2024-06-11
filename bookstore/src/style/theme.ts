export type ColorKey = "primary" | "background";
export type ThemeName = "light" | "dark";
export type HeadingSize = 'large' | 'medium' | 'small';

interface Theme {
    name: ThemeName;
    color: Record<ColorKey, string>;
    heading: {
        [key in HeadingSize]: {
            fontSize: string;
        }
    }
}

export const light : Theme = {
    name: 'light',
    color: {
        primary: 'brown',
        background: 'lightgray', 
    },
    heading: {
        large: {
            fontSize: "2rem"
        },
        medium: {
            fontSize: "1.5rem"
        },
        small: {
            fontSize: "1rem"
        }
    }
};

export const dark : Theme = {
    ...light,
    name: 'dark',
    color: {
        primary: 'coral',
        background: 'midnightblue',
    }
};

export const getTheme = (themeName: ThemeName): Theme => {
    switch (themeName) {
        case "light":
            return light;
        case "dark":
            return dark;
    }
}